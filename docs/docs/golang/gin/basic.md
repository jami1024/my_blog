# 介绍

Gin 是一个用 Go (Golang) 编写的 Web 框架.它具有类似 martini 的 API,性能要好得多,多亏了 httprouter,速度提高了 40 倍.

## 特性

### 快速

基于 Radix 树的路由，小内存占用。没有反射。可预测的 API 性能。

### 支持中间件

传入的 HTTP 请求可以由一系列中间件和最终操作来处理。 例如：Logger，Authorization，GZIP，最终操作 DB。

### Crash 处理

Gin 可以 catch 一个发生在 HTTP 请求中的 panic 并 recover 它。这样，你的服务器将始终可用。例如，你可以向 Sentry 报告这个 panic！

### JSON 验证

Gin 可以解析并验证请求的 JSON，例如检查所需值的存在

### 路由组

更好地组织路由。是否需要授权，不同的 API 版本…… 此外，这些组可以无限制地嵌套而不会降低性能。

### 错误管理

Gin 提供了一种方便的方法来收集 HTTP 请求期间发生的所有错误。最终，中间件可以将它们写入日志文件，数据库并通过网络发送。

### 内置渲染

Gin 为 JSON，XML 和 HTML 渲染提供了易于使用的 API。

## 例子

```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// 定义处理函数
func Index(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"msg": "hello,world",
	})
}

func main() {
	// 初始化gin实例
	r := gin.Default()
	// 设置路由
	r.GET("/", Index)
	// 运行
	r.Run()
}

```

## gin.Default()

```go
func Default() *Engine {
	debugPrintWARNINGDefault()
	engine := New()
    engine.Use(Logger(), Recovery())	// 这里使用了两个中间件，Logger()和Recovery(),现在先不关心，往后看
	return engine
}
// ---------------------------------------------------------------------------------
// ServeHTTP conforms to the http.Handler interface.
func (engine *Engine) ServeHTTP(w http.ResponseWriter, req *http.Request) {
    // 往池子里取出一个Context
    // engine.pool就是sync.Pool，临时内存池
	c := engine.pool.Get().(*Context)

    // Context对象初始化
	c.writermem.reset(w)
	c.Request = req
	c.reset()

    // 匹配URL并调用注册的Handler进行处理
	engine.handleHTTPRequest(c)

    // 处理完成后放回池子
	engine.pool.Put(c)
}
// ---------------------------------------------------------------------------------
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
    // 从给出的HTTP方法找到root节点

    // 路由树，具体信息后面看
	t := engine.trees

    // 使用for循环遍历,这里的for循环使用是一个小技巧
	for i, tl := 0, len(t); i < tl; i++ {
		if t[i].method != httpMethod {
			continue
		}
		root := t[i].root
		// Find route in tree
		value := root.getValue(rPath, c.params, c.skippedNodes, unescape)
		if value.params != nil {
			c.Params = *value.params
		}
		if value.handlers != nil {
			c.handlers = value.handlers
			c.fullPath = value.fullPath
			c.Next()
			c.writermem.WriteHeaderNow()
			return
		}
        // ...

// ---------------------------------------------------------------------------------
// for循环讨巧技巧

package main
import "fmt"
func main() {
	// 很多时候我们会这样遍历
	nodes := []string{"hello", "world", "!"}
	n := len(nodes)
	for i := 0; i < n; i++ {
		fmt.Println(nodes[i])
	}
	fmt.Println(n) // 遍历完成后n还可以正常使用，说明对象还没有被销毁，还在占用内存

	// 讨巧的技能
	// (1) 少写了一行获取切片长度
	for i, n := 0, len(nodes); i < n; i++ {
		fmt.Println(nodes[i])
	}
	//fmt.Println(n)	// （2）n已经不能使用了，内存已释放
	// 当外部不需要切片长度的时候，可以使用这个技巧
}

// ---------------------------------------------------------------------------------
type Engine struct {
    // ...
    pool             sync.Pool
    trees            methodTrees   // 看一下tress是啥
    // ...
}

var _ IRouter = &Engine{}	       // 这里又是另外一个小技巧，实例化一下，但是又什么都不做，目的在于
        						   // 在编译阶段就确保Engine实现了IRouter接口
        						   //	type IRouter interface {
								   //		IRoutes
								   //		Group(string, ...HandlerFunc) *RouterGroup
								   //	}

type methodTrees []methodTree	// tress是一个切片

type methodTree struct {
	method string
	root   *node
}

type node struct {
	path      string
	indices   string
	wildChild bool
	nType     nodeType
	priority  uint32
	children  []*node // child nodes, at most 1 :param style node at the end of the array
	handlers  HandlersChain
	fullPath  string
}

func New() *Engine {
	debugPrintWARNINGNew()
	engine := &Engine{
		RouterGroup: RouterGroup{
			Handlers: nil,
			basePath: "/",
			root:     true,
		},
		FuncMap:                template.FuncMap{},
		RedirectTrailingSlash:  true,
		RedirectFixedPath:      false,
		HandleMethodNotAllowed: false,
		ForwardedByClientIP:    true,
		RemoteIPHeaders:        []string{"X-Forwarded-For", "X-Real-IP"},
		TrustedPlatform:        defaultPlatform,
		UseRawPath:             false,
		RemoveExtraSlash:       false,
		UnescapePathValues:     true,
		MaxMultipartMemory:     defaultMultipartMemory,
        // 容量为9，代表9个HTTP方法，包含GET, POST, PUT, PATCH, HEAD, OPTIONS, DELETE, CONNECT, TRACE
		trees:                  make(methodTrees, 0, 9),
		delims:                 render.Delims{Left: "{{", Right: "}}"},
		secureJSONPrefix:       "while(1);",
		trustedProxies:         []string{"0.0.0.0/0"},
		trustedCIDRs:           defaultTrustedCIDRs,
	}
	engine.RouterGroup.engine = engine
	engine.pool.New = func() interface{} {
		return engine.allocateContext()
	}
	return engine
}

// ---------------------------------------------------------------------------------
// 改写一下代码，不使用gin.Default()，使用自己New()的引擎
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
	r := gin.New()
	r.Use(gin.Logger(), gin.Recovery())

	// 注册路由
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "Hello Gin!\n")
	})

	// 启动Gin Server
	log.Fatalln(http.ListenAndServe(addr, r))
}
```
