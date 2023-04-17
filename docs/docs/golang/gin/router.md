# 路由

## 路由原理(1):基数树

gin 框架使用的是定制版本的[httprouter](https://github.com/julienschmidt/httprouter)，使用基数树（Radix Tree）来存储和查找路由基数树（Radix Tree）是一种更节省空间的前缀树（Trie Tree）对于基数树的每个节点，如果该节点是唯一的子树的话，就和父节点合并。
下图为一个基数树示例：

![radix_tree](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/radix_tree.png)

假设有以下路由注册信息

```go
r := gin.Default()
r.GET("/", func1)
r.GET("/search/", func2)
r.GET("/support/", func3)
r.GET("/blog/", func4)
r.GET("/blog/:post/", func5)
r.GET("/about-us/", func6)
r.GET("/about-us/team/", func7)
r.GET("/contact/", func8)
```

`Gin`为每种请求方法管理一棵单独的树，所以我们会得到一个`GET`方法对应的路由树：

```bash
Priority   Path             Handle
9          \                *<1>
3          ├s               nil
2          |├earch\         *<2>
1          |└upport\        *<3>
2          ├blog\           *<4>
1          |    └:post      nil
1          |         └\     *<5>
2          ├about-us\       *<6>
1          |        └team\  *<7>
1          └contact\        *<8>
```

- 基数树允许我们使用像`:post`参数这种动态部分
- 每个节点都有优先级属性，作用是可以优先匹配被大多数路由路径包含的节点

## 路由原理(2):相关结构体

```go
// Engine结构体
type Engine struct {
	RouterGroup
    // ...
}

// RouterGroup结构体
type RouterGroup struct {
	Handlers HandlersChain
	basePath string
	engine   *Engine
	root     bool
}
// Engine和RouterGroup类似于相互嵌套的结构

// --------------------------------------------------------------------
// 路由树节点
type node struct {
    // 节点路径,比如上面的s，earch，和upport
	path      string

    // 保存分裂分支的第一个字符，
    // 比如search和support, 那么s节点的indices属性就为"eu"，代表有两个分支, 分支的首字母分别是e和u
	indices   string

    // 节点是否是参数节点，比如上面的:post
	wildChild bool

    // 节点类型
    // static: 静态节点（默认），比如上面的s，earch等节点
	// root: 树的根节点
	// catchAll: 有*匹配的节点
	// param: 参数节点
	nType     nodeType

    // 优先级，子节点越多，优先级越高(数字越大)，该节点越优先匹配
	priority  uint32

    // 子节点(只包含儿子节点，不包含孙子节点)
	children  []*node // child nodes, at most 1 :param style node at the end of the array

    // 处理函数链条（切片）
	handlers  HandlersChain

    // 完整路径
	fullPath  string
}
// --------------------------------------------------------------------
// 请求方法树，每个方法对应一棵树
type methodTree struct {
	method string
	root   *node
}

type methodTrees []methodTree

func (trees methodTrees) get(method string) *node {	// 从切片中获取方法树节点
	for _, tree := range trees {
		if tree.method == method {
			return tree.root
		}
	}
	return nil
}
```

## 路由原理(3):路由注册逻辑

我们查看一下`r.GET`源码

```go
// GET is a shortcut for router.Handle("GET", path, handle).
func (group *RouterGroup) GET(relativePath string, handlers ...HandlerFunc) IRoutes {
	return group.handle(http.MethodGet, relativePath, handlers)
}

// ---------------------------------------------------------------------------------
func (group *RouterGroup) handle(httpMethod, relativePath string, handlers HandlersChain) IRoutes {
	absolutePath := group.calculateAbsolutePath(relativePath)	// 获取绝对路径（若没有前缀/则自动添加前缀/）
	handlers = group.combineHandlers(handlers)					// 编译handlers
	group.engine.addRoute(httpMethod, absolutePath, handlers)	// 注册路由
	return group.returnObj()
}

// ---------------------------------------------------------------------------------
func (engine *Engine) addRoute(method, path string, handlers HandlersChain) {
	assert1(path[0] == '/', "path must begin with '/'")
	assert1(method != "", "HTTP method can not be empty")
	assert1(len(handlers) > 0, "there must be at least one handler")

	debugPrintRoute(method, path, handlers)

    // 获取方法对应的根节点，trees是一个切片，get是自定义方法，内部是一个循环遍历
	root := engine.trees.get(method)
	if root == nil {
		root = new(node)
		root.fullPath = "/"
		engine.trees = append(engine.trees, methodTree{method: method, root: root})
	}
    // 根节点注册路由
	root.addRoute(path, handlers)

	// Update maxParams
	if paramsCount := countParams(path); paramsCount > engine.maxParams {
		engine.maxParams = paramsCount
	}

	if sectionsCount := countSections(path); sectionsCount > engine.maxSections {
		engine.maxSections = sectionsCount
	}
}
```

注册逻辑

```go
// addRoute 将具有给定句柄的节点添加到路径中。
// 不是并发安全的
func (n *node) addRoute(path string, handlers HandlersChain) {
	fullPath := path
	n.priority++
	numParams := countParams(path)  // 数一下参数个数

	// 空树就直接插入当前节点
	if len(n.path) == 0 && len(n.children) == 0 {
		n.insertChild(numParams, path, fullPath, handlers)
		n.nType = root
		return
	}

	parentFullPathIndex := 0

walk:
	for {
		// 更新当前节点的最大参数个数
		if numParams > n.maxParams {
			n.maxParams = numParams
		}

		// 找到最长的通用前缀
		// 这也意味着公共前缀不包含“:”"或“*” /
		// 因为现有键不能包含这些字符。
		i := longestCommonPrefix(path, n.path)

		// 分裂边缘（此处分裂的是当前树节点）
		// 例如一开始path是search，新加入support，s是他们通用的最长前缀部分
		// 那么会将s拿出来作为parent节点，增加earch和upport作为child节点
		if i < len(n.path) {
			child := node{
				path:      n.path[i:],  // 公共前缀后的部分作为子节点
				wildChild: n.wildChild,
				indices:   n.indices,
				children:  n.children,
				handlers:  n.handlers,
				priority:  n.priority - 1, //子节点优先级-1
				fullPath:  n.fullPath,
			}

			// Update maxParams (max of all children)
			for _, v := range child.children {
				if v.maxParams > child.maxParams {
					child.maxParams = v.maxParams
				}
			}

			n.children = []*node{&child}
			// []byte for proper unicode char conversion, see #65
			n.indices = string([]byte{n.path[i]})
			n.path = path[:i]
			n.handlers = nil
			n.wildChild = false
			n.fullPath = fullPath[:parentFullPathIndex+i]
		}

		// 将新来的节点插入新的parent节点作为子节点
		if i < len(path) {
			path = path[i:]

			if n.wildChild {  // 如果是参数节点
				parentFullPathIndex += len(n.path)
				n = n.children[0]
				n.priority++

				// Update maxParams of the child node
				if numParams > n.maxParams {
					n.maxParams = numParams
				}
				numParams--

				// 检查通配符是否匹配
				if len(path) >= len(n.path) && n.path == path[:len(n.path)] {
					// 检查更长的通配符, 例如 :name and :names
					if len(n.path) >= len(path) || path[len(n.path)] == '/' {
						continue walk
					}
				}

				pathSeg := path
				if n.nType != catchAll {
					pathSeg = strings.SplitN(path, "/", 2)[0]
				}
				prefix := fullPath[:strings.Index(fullPath, pathSeg)] + n.path
				panic("'" + pathSeg +
					"' in new path '" + fullPath +
					"' conflicts with existing wildcard '" + n.path +
					"' in existing prefix '" + prefix +
					"'")
			}
			// 取path首字母，用来与indices做比较
			c := path[0]

			// 处理参数后加斜线情况
			if n.nType == param && c == '/' && len(n.children) == 1 {
				parentFullPathIndex += len(n.path)
				n = n.children[0]
				n.priority++
				continue walk
			}

			// 检查路path下一个字节的子节点是否存在
			// 比如s的子节点现在是earch和upport，indices为eu
			// 如果新加一个路由为super，那么就是和upport有匹配的部分u，将继续分列现在的upport节点
			for i, max := 0, len(n.indices); i < max; i++ {
				if c == n.indices[i] {
					parentFullPathIndex += len(n.path)
					i = n.incrementChildPrio(i)
					n = n.children[i]
					continue walk
				}
			}

			// 否则就插入
			if c != ':' && c != '*' {
				// []byte for proper unicode char conversion, see #65
				// 注意这里是直接拼接第一个字符到n.indices
				n.indices += string([]byte{c})
				child := &node{
					maxParams: numParams,
					fullPath:  fullPath,
				}
				// 追加子节点
				n.children = append(n.children, child)
				n.incrementChildPrio(len(n.indices) - 1)
				n = child
			}
			n.insertChild(numParams, path, fullPath, handlers)
			return
		}

		// 已经注册过的节点
		if n.handlers != nil {
			panic("handlers are already registered for path '" + fullPath + "'")
		}
		n.handlers = handlers
		return
	}
}
```

翻译成动画大概是这样的流程：

![addroute](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/addroute.gif)

```go
// tree.go
func (n *node) insertChild(numParams uint8, path string, fullPath string, handlers HandlersChain) {
  // 找到所有的参数
	for numParams > 0 {
		// 查找前缀直到第一个通配符
		wildcard, i, valid := findWildcard(path)
		if i < 0 { // 没有发现通配符
			break
		}

		// 通配符的名称必须包含':' 和 '*'
		if !valid {
			panic("only one wildcard per path segment is allowed, has: '" +
				wildcard + "' in path '" + fullPath + "'")
		}

		// 检查通配符是否有名称
		if len(wildcard) < 2 {
			panic("wildcards must be named with a non-empty name in path '" + fullPath + "'")
		}

		// 检查这个节点是否有已经存在的子节点
		// 如果我们在这里插入通配符，这些子节点将无法访问
		if len(n.children) > 0 {
			panic("wildcard segment '" + wildcard +
				"' conflicts with existing children in path '" + fullPath + "'")
		}

		if wildcard[0] == ':' { // param
			if i > 0 {
				// 在当前通配符之前插入前缀
				n.path = path[:i]
				path = path[i:]
			}

			n.wildChild = true
			child := &node{
				nType:     param,
				path:      wildcard,
				maxParams: numParams,
				fullPath:  fullPath,
			}
			n.children = []*node{child}
			n = child
			n.priority++
			numParams--

			// 如果路径没有以通配符结束
			// 那么将有另一个以'/'开始的非通配符子路径。
			if len(wildcard) < len(path) {
				path = path[len(wildcard):]

				child := &node{
					maxParams: numParams,
					priority:  1,
					fullPath:  fullPath,
				}
				n.children = []*node{child}
				n = child  // 继续下一轮循环
				continue
			}

			// 否则我们就完成了。将处理函数插入新叶子中
			n.handlers = handlers
			return
		}

		// catchAll
		if i+len(wildcard) != len(path) || numParams > 1 {
			panic("catch-all routes are only allowed at the end of the path in path '" + fullPath + "'")
		}

		if len(n.path) > 0 && n.path[len(n.path)-1] == '/' {
			panic("catch-all conflicts with existing handle for the path segment root in path '" + fullPath + "'")
		}

		// currently fixed width 1 for '/'
		i--
		if path[i] != '/' {
			panic("no / before catch-all in path '" + fullPath + "'")
		}

		n.path = path[:i]

		// 第一个节点:路径为空的catchAll节点
		child := &node{
			wildChild: true,
			nType:     catchAll,
			maxParams: 1,
			fullPath:  fullPath,
		}
		// 更新父节点的maxParams
		if n.maxParams < 1 {
			n.maxParams = 1
		}
		n.children = []*node{child}
		n.indices = string('/')
		n = child
		n.priority++

		// 第二个节点:保存变量的节点
		child = &node{
			path:      path[i:],
			nType:     catchAll,
			maxParams: 1,
			handlers:  handlers,
			priority:  1,
			fullPath:  fullPath,
		}
		n.children = []*node{child}

		return
	}

	// 如果没有找到通配符，只需插入路径和句柄
	n.path = path
	n.handlers = handlers
	n.fullPath = fullPath
}
```

## 路由原理(4):路由匹配逻辑

```go
Engine -> ServeHTTP方法 -> engine.handleHTTPRequest(c) ->
// ---------------------------------------------------------------------
func (engine *Engine) handleHTTPRequest(c *Context) {
	httpMethod := c.Request.Method	// 请求方法
	rPath := c.Request.URL.Path		// 请求Path
	unescape := false
	if engine.UseRawPath && len(c.Request.URL.RawPath) > 0 {
		rPath = c.Request.URL.RawPath
		unescape = engine.UnescapePathValues
	}

	if engine.RemoveExtraSlash {
		rPath = cleanPath(rPath)
	}

	// Find root of the tree for the given HTTP method
	t := engine.trees
	for i, tl := 0, len(t); i < tl; i++ {
		if t[i].method != httpMethod {
			continue
		}
		root := t[i].root		// 找到请求方法对应的基数树
		// Find route in tree
		value := root.getValue(rPath, c.params, c.skippedNodes, unescape)	// 根据path获取到路由节点node
		if value.params != nil {
			c.Params = *value.params
		}
// ---------------------------------------------------------------------
func (n *node) getValue(path string, po Params, unescape bool) (value nodeValue) {
	value.params = po
walk: // Outer loop for walking the tree
	for {
		prefix := n.path
		if path == prefix {
			// 我们应该已经到达包含处理函数的节点。
			// 检查该节点是否注册有处理函数
			if value.handlers = n.handlers; value.handlers != nil {
				value.fullPath = n.fullPath
				return
			}

			if path == "/" && n.wildChild && n.nType != root {
				value.tsr = true
				return
			}

			// 没有找到处理函数 检查这个路径末尾+/ 是否存在注册函数
			indices := n.indices
			for i, max := 0, len(indices); i < max; i++ {
				if indices[i] == '/' {
					n = n.children[i]
					value.tsr = (len(n.path) == 1 && n.handlers != nil) ||
						(n.nType == catchAll && n.children[0].handlers != nil)
					return
				}
			}

			return
		}

		if len(path) > len(prefix) && path[:len(prefix)] == prefix {
			path = path[len(prefix):]
			// 如果该节点没有通配符(param或catchAll)子节点
			// 我们可以继续查找下一个子节点
			if !n.wildChild {
				c := path[0]
				indices := n.indices
				for i, max := 0, len(indices); i < max; i++ {
					if c == indices[i] {
						n = n.children[i] // 遍历树
						continue walk
					}
				}

				// 没找到
				// 如果存在一个相同的URL但没有末尾/的叶子节点
				// 我们可以建议重定向到那里
				value.tsr = path == "/" && n.handlers != nil
				return
			}

			// 根据节点类型处理通配符子节点
			n = n.children[0]
			switch n.nType {
			case param:
				// find param end (either '/' or path end)
				end := 0
				for end < len(path) && path[end] != '/' {
					end++
				}

				// 保存通配符的值
				if cap(value.params) < int(n.maxParams) {
					value.params = make(Params, 0, n.maxParams)
				}
				i := len(value.params)
				value.params = value.params[:i+1] // 在预先分配的容量内扩展slice
				value.params[i].Key = n.path[1:]
				val := path[:end]
				if unescape {
					var err error
					if value.params[i].Value, err = url.QueryUnescape(val); err != nil {
						value.params[i].Value = val // fallback, in case of error
					}
				} else {
					value.params[i].Value = val
				}

				// 继续向下查询
				if end < len(path) {
					if len(n.children) > 0 {
						path = path[end:]
						n = n.children[0]
						continue walk
					}

					// ... but we can't
					value.tsr = len(path) == end+1
					return
				}

				if value.handlers = n.handlers; value.handlers != nil {
					value.fullPath = n.fullPath
					return
				}
				if len(n.children) == 1 {
					// 没有找到处理函数. 检查此路径末尾加/的路由是否存在注册函数
					// 用于 TSR 推荐
					n = n.children[0]
					value.tsr = n.path == "/" && n.handlers != nil
				}
				return

			case catchAll:
				// 保存通配符的值
				if cap(value.params) < int(n.maxParams) {
					value.params = make(Params, 0, n.maxParams)
				}
				i := len(value.params)
				value.params = value.params[:i+1] // 在预先分配的容量内扩展slice
				value.params[i].Key = n.path[2:]
				if unescape {
					var err error
					if value.params[i].Value, err = url.QueryUnescape(path); err != nil {
						value.params[i].Value = path // fallback, in case of error
					}
				} else {
					value.params[i].Value = path
				}

				value.handlers = n.handlers
				value.fullPath = n.fullPath
				return

			default:
				panic("invalid node type")
			}
		}

		// 找不到，如果存在一个在当前路径最后添加/的路由
		// 我们会建议重定向到那里
		value.tsr = (path == "/") ||
			(len(prefix) == len(path)+1 && prefix[len(path)] == '/' &&
				path == prefix[:len(prefix)-1] && n.handlers != nil)
		return
	}
}
```

## 普通路由

```go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.GET("/index", func(c *gin.Context) {
		c.String(http.StatusOK, "Index\n")
	})
	r.POST("/login", func(c *gin.Context) {
		c.String(http.StatusOK, "Login\n")
	})

	// Any可以支持多种方法，具体包含：GET, POST, PUT, PATCH, HEAD, OPTIONS, DELETE, CONNECT, TRACE.
	r.Any("/", func(c *gin.Context) {
		c.String(http.StatusOK, fmt.Sprintf("你的请求方法是: %s\n", c.Request.Method))
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**输出结果**

```bash
curl http://127.0.0.1/index
Index
curl -XPOST http://127.0.0.1/login
Login
curl  http://127.0.0.1/
你的请求方法是: GET
curl -XPUT http://127.0.0.1/
你的请求方法是: PUT
curl -XPOST http://127.0.0.1/
你的请求方法是: POST
```

## 分组路由

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	apiV1 := r.Group("/api/v1")
	apiV1.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello Gin!")
	})
	apiV1.GET("/login", func(c *gin.Context) {
		c.String(http.StatusOK, "Login")
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**输出结果**

```bash
curl  http://127.0.0.1/api/v1/
Hello Gin!
curl  http://127.0.0.1/api/v1/login
```

## 尾斜杠和重定向

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 默认为ture,设置为False可以关闭自动重定向（全局设置）
	//r.RedirectTrailingSlash = false

	// 默认为false, 设置为true如果匹配不到将会尝试修复path，比如/FOO和/..//Foo将会被重定向到/foo(/foo存在的情况下)
	//r.RedirectFixedPath = true

	// 注册路由
	r.GET("/index", func(c *gin.Context) {
		c.String(http.StatusOK, "Index\n")
	})
	r.GET("/login/", func(c *gin.Context) {
		c.String(http.StatusOK, "Login\n")
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**输出结果**

```bash
# 注册什么就访问什么，没有问题
curl http://127.0.0.1/index
Index
curl http://127.0.0.1/login/
Login

# 无论注册时带不带尾斜杠，访问时都可以自动重定向
curl http://127.0.0.1/index/
<a href="/index">Moved Permanently</a>.
curl http://127.0.0.1/index/ -L
Index
curl http://127.0.0.1/login -L
Login

# 查看响应头
curl http://127.0.0.1/login -i # windows下使用-i
HTTP/1.1 301 Moved Permanently
Content-Type: text/html; charset=utf-8
Location: /login/
Date: Sun, 08 May 2022 10:31:39 GMT
Content-Length: 42

<a href="/login/">Moved Permanently</a>.

# 并不会像net/http那样，会进行前缀匹配
curl http://127.0.0.1/login/a/b/c
404 page not found
```

**HTTP 重定向**

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.GET("/index", func(c *gin.Context) {
		// HTTP重定向（如果在Chrome等浏览器下访问地址栏会变为/login/）
		c.Redirect(http.StatusMovedPermanently, "/login/")
	})
	r.GET("/login/", func(c *gin.Context) {
		c.String(http.StatusOK, "Login\n")
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**路由内重定向**

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.GET("/index", func(c *gin.Context) {
		// 路由内重定向（如果在Chrome等浏览器下访问地址栏不会发生变化）
		c.Request.URL.Path = "/login/"
		r.HandleContext(c)
	})
	r.GET("/login/", func(c *gin.Context) {
		c.String(http.StatusOK, "Login\n")
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

![image-20220508183700833](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/image-20220508183700833.png)
