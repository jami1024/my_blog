

# 参数解析

`Content-Type`
**说明**

`Content-Type`写入在 HTTP 请求头或响应头中，用于告知接收方资源类型

- 接收方可以是服务端（客户端发送 HTTP 请求设置`Content-Type`），
- 可以是客户端（服务端返回 HTTP 响应设置`Content-Type`）

* `Content-Type`参数并不是必须要设置的

**语法格式如下：**

```html
Content-Type: type/subtype [; charset] [; boundary]
```

- type/subtype：由类型与子类型两个字符串中间用`'/'`分隔而组成。不允许空格存在。
- charset：字符编码标准
- 对于多部分实体，boundary 是必需的，其包括来自一组字符的 1 到 70 个字符，已知通过电子邮件网关是非常健壮的，而不是以空白结尾。它用于封装消息的多个部分的边界
  **Content-Type 类型举例**

| 类型                             | 说明                                                                                     | Content-Type 典型示例                                                                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `text`<br/>（文本类型）          | 表明文件是普通文本，理论上是人类可读                                                     | `text/plain`<br />`text/html`<br />`text/css`<br />`text/javascript`                                                                  |
| `image`<br/>（图片类型）         | 表明是某种图像。不包括视频，<br />但是动态图（比如动态 gif）也使用 image 类型            | `image/gif`<br />`image/png`<br />`image/jpeg`<br />`image/bmp`<br />`image/webp`<br />`image/x-icon`<br />`image/vnd.microsoft.icon` |
| `audio`<br/>（音频类型）         | 表明是某种音频文件                                                                       | `audio/midi` <br />`audio/mpeg`<br />`audio/webm`<br />`audio/ogg`<br />`audio/wav`                                                   |
| `video`<br/>（视频类型）         | 表明是某种视频文件                                                                       | `video/webm`<br />`video/ogg`                                                                                                         |
| `application`<br/>（二进制类型） | 表明是某种二进制数据                                                                     | `  applicationx-www-form-urlencoded`<br />`application/json`<br />`application/octet-stream`<br />`application/pdf`                   |
| `Multipart`<br/>（文件类型）     | 表示细分领域的文件类型的种类，经常对应不同的 MIME 类型。<br />这是复合文件的一种表现方式 | `multipart/form-data`<br />`multipart/byteranges`                                                                                     |

参考自：[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

## 路径参数

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

	// 注册路由 - 路径参数
	r.GET("/user/:id", func(c *gin.Context) {
		url := c.Request.URL
		id := c.Param("id")
		c.String(http.StatusOK, fmt.Sprintf("URL: %s, userId: %s\n", url, id))
	})

	r.GET("/article/*id", func(c *gin.Context) {
		url := c.Request.URL
		id := c.Param("id")
		c.String(http.StatusOK, fmt.Sprintf("URL: %s, articleId: %s\n", url, id))
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**输出结果**

```bash
# 必须传递参数
curl http://127.0.0.1/user
404 page not found
curl http://127.0.0.1/user/
404 page not found
# 数据类型可以是多种类型
curl http://127.0.0.1/user/1
URL: /user/1, userId: 1
curl http://127.0.0.1/user/abc
URL: /user/abc, userId: abc
# 不支持多级
curl http://127.0.0.1/user/1/2
404 page not found
# 重定向
curl http://127.0.0.1/article
<a href="/article/">Moved Permanently</a>.
# 可以不传参数
curl http://127.0.0.1/article/
URL: /article/, articleId: /
# 传一个参数
curl http://127.0.0.1/article/1
URL: /article/1, articleId: /1
# 多级参数
curl http://127.0.0.1/article/abc/def
URL: /article/abc/def, articleId: /abc/def
```

## 查询字符串

| 方法                                                | 说明                                                            |
| --------------------------------------------------- | --------------------------------------------------------------- |
| `Query(key string) string`                          | 获取 key 的值，若获取不到返回空字符串，若传递多个则只获取第一个 |
| `QueryArray(key string) []string`                   | 类似`Query`，可以获取多个值                                     |
| `DefaultQuery(key, defaultValue string) string`     | 类似`Query`，可以自定义默认值                                   |
| `QueryMap(key string) map[string]string`            | 获取 key 的值，输入为`map`，返回为`map`                         |
| `GetQuery(key string) (string, bool)`               | 类似`Query`，返回两个值，ok 代表是否获取到值                    |
| `GetQueryArray(key string) ([]string, bool)`        | 类似`QueryArray`，返回两个值，ok 代表是否获取到值               |
| `GetQueryMap(key string) (map[string]string, bool)` | 类似`QueryMap`，返回两个值，ok 代表是否获取到值                 |

_示例代码_

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

	// 注册路由 - 路径参数
	r.GET("/", func(c *gin.Context) {
		msg := fmt.Sprintf("%#v\n", c.QueryMap("map"))
		c.String(http.StatusOK, msg)
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**输出结果**

```bash
curl "http://127.0.0.1/?map\[id\]=abc&map\[name\]=zhangsan"
map[string]string{"id":"abc", "name":"zhangsan"}
```

## 表单解析

| 方法                                                   | 说明                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| `PostForm(key string) string`                          | 解析表单，若获取不到返回空字符串，若获取到多个则只返回第一个 |
| `PostFormArray(key string) []string`                   | 类似`PostForm`，可以获取多个值                               |
| `PostFormMap(key string) map[string]string`            | 类似`PostForm`，输入为`map`，返回为`map`                     |
| `GetPostForm(key string) (string, bool)`               | 类似`PostForm`，返回两个值，ok 代表是否获取到值              |
| `GetPostFormArray(key string) ([]string, bool)`        | 类似`PostFormArray`，返回两个值，ok 代表是否获取到值         |
| `GetPostFormMap(key string) (map[string]string, bool)` | 类似`PostFormMap`，返回两个值，ok 代表是否获取到值           |
| `DefaultPostForm(key, defaultValue string) string`     | 类似`PostForm`，可以设置默认值                               |

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
	addr := "192.168.0.105:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.POST("/", func(c *gin.Context) {
		// 获取Content-Type
		contentType := c.GetHeader("Content-Type")

		// 解析表单数据
		username := c.PostForm("username")
		password := c.PostForm("password")

		// 返回响应
		msg := fmt.Sprintf("Content-Type: %q\nPostForm: username: %q, password: %q\n", contentType, username, password)
		c.String(http.StatusOK, msg)
	})

	r.GET("/", func(c *gin.Context) {
		// 获取Content-Type
		contentType := c.GetHeader("Content-Type")

		// 解析表单数据
		username := c.PostForm("username")
		password := c.PostForm("password")

		// 返回响应
		msg := fmt.Sprintf("Content-Type: %q\nPostForm: username: %q, password: %q\n", contentType, username, password)
		c.String(http.StatusOK, msg)
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**输出结果**

```bash
# -------------先使用POST方法测试------------------------------------------------------
# 什么都不传，服务端接收到空字符串
curl http://192.168.0.105/ -XPOST
Content-Type: ""
PostForm: username: "", password: ""

# 服务端响应头的Content-Type为【text/plain; charset=utf-8】
curl http://192.168.0.105/ -XPOST -I
HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Date: Fri, 06 May 2022 05:52:49 GMT
Content-Length: 54

# ⭐使用-d参数提交数据，curl会自动设置Content-Type为application/x-www-form-urlencoded
curl http://192.168.0.105/ -XPOST -d "username=root&password=123456中国"
Content-Type: "application/x-www-form-urlencoded"
PostForm: username: "root", password: "123456中国"

# 给curl设置一个错误的Content-Type,可以看到服务端获取不到我们提交的数据了
curl http://192.168.0.105/ -XPOST -d "username=root&password=123456中国" -H "Content-Type:abc"
Content-Type: "abc"
PostForm: username: "", password: ""

curl http://192.168.0.105/ -XPOST -d "username=root&password=123456中国" -H "Content-Type:application/json"
Content-Type: "application/json"
PostForm: username: "", password: ""

# ⭐使用-f参数提交表单，curl会自动设置Content-Type为multipart/form-data
curl http://192.168.0.105/ -XPOST --form username=root --form password=中国你好
Content-Type: "multipart/form-data; boundary=----------------------------cb1776d3bb87"
PostForm: username: "root", password: "中国你好"

# -------------再使用GET方法测试------------------------------------------------------
curl http://192.168.0.105/ -XGET -d "username=root&password=123456中国"
Content-Type: "application/x-www-form-urlencoded"
PostForm: username: "", password: ""

curl http://192.168.0.105/ -XGET --form username=root --form password=中国你好
Content-Type: "multipart/form-data; boundary=----------------------------cd010eead867"
PostForm: username: "root", password: "中国你好"
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <form action="http://192.168.0.105/" method="post">
      <!-- 默认enctype的值为application/x-www-form-urlencoded -->
      <!--<form action="http://192.168.0.105/" method="post" enctype="application/x-www-form-urlencoded">-->
      <label>
        <span>用户名</span>
        <input
          type="text"
          name="username"
          placeholder="请输入您的用户名"
          autocomplete="off"
          autofocus
        />
      </label>
      <label>
        <span>密码</span>
        <input
          type="password"
          name="password"
          placeholder="请输入您的密码"
          autocomplete="off"
        />
      </label>
      <input type="submit" value="登录" />
    </form>
  </body>
</html>
```

## 参数绑定

### GET 查询字符串参数绑定

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

// 第一次使用参数绑定注意事项：
// (1) 结构体字段必须可导出(首字母大写)
// (2) 绑定时必须用结构体指针(因为要给外部变量赋值嘛)

// 查询字符串参数绑定
// (3) form可选，如果不写，传递参数时必须与结构体名字一致
// (4) Content-Type有没有都无所谓

type User struct {
	Username string `form:"username"`
	Password string `form:"password"`
}

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.GET("/", func(c *gin.Context) {
		// 获取Content-Type
		contentType := c.GetHeader("Content-Type")

		// 参数绑定
		var user User
		err := c.ShouldBind(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"Content-Type": contentType,
				"Message":      "请求参数错误" + err.Error(),
			})
			return
		}

		// 返回响应
		c.JSON(http.StatusOK, gin.H{
			"Content-Type": contentType,
			"Username":     user.Username,
			"Password":     user.Password,
		})
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

![image-20220507134109116](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/image-20220507134109116.png)

### POST 表单参数绑定

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

// Post表单参数绑定注意事项
// (1) form可选，如果不写，传递参数时必须与结构体名字一致
// (2) Content-Type为【application/x-www-form-urlencoded】或【multipart/form-data;boundary=xx】都可以

type User struct {
	Username string `form:"username"`
	Password string `form:"password"`
}

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.POST("/", func(c *gin.Context) {
		// 获取Content-Type
		contentType := c.GetHeader("Content-Type")

		// 参数绑定
		var user User
		err := c.ShouldBind(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"Content-Type": contentType,
				"Message":      "请求参数错误" + err.Error(),
			})
			return
		}

		// 返回响应
		c.JSON(http.StatusOK, gin.H{
			"Content-Type": contentType,
			"Username":     user.Username,
			"Password":     user.Password,
		})
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

![image-20220507133521628](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/image-20220507133521628.png)

![image-20220507133540059](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/image-20220507133540059.png)

### POST JSON 参数绑定

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

// POST JSON参数绑定注意事项：
// (1) 结构体Tag中json可选，如果不写，传递参数时必须与结构体名字一致
// (2) Content-Type必须设置成application/json

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.POST("/", func(c *gin.Context) {
		// 获取Content-Type
		contentType := c.GetHeader("Content-Type")

		// 参数绑定
		var user User
		err := c.ShouldBind(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"Content-Type": contentType,
				"Message":      "请求参数错误" + err.Error(),
			})
			return
		}

		// 返回响应
		c.JSON(http.StatusOK, gin.H{
			"Content-Type": contentType,
			"Username":     user.Username,
			"Password":     user.Password,
		})
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

![image-20220507134825424](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/image-20220507134825424.png)

### 多次参数绑定问题

```go
package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"log"
	"net/http"
)

// 多次参数绑定注意事项：
// 问题描述：
// 		对于部分格式数据(JSON, XML, MsgPack, ProtoBuf)，使用ShouldBind多次绑定会出错,原因是c.Request.Body不可以重用，第二次读取就会出现EOF
//      对于其他格式（Query, Form, FormPost, FormMultipart）则可以多次调用c.ShouldBind()
// 解决办法：
// 		使用ShouldBindBodyWith绑定

type User struct {
	Username string `json:"username" form:"username"`
	Password string `json:"password" form:"password"`
}

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.POST("/", func(c *gin.Context) {
		// 获取Content-Type
		contentType := c.GetHeader("Content-Type")

		// 参数绑定
		var user User
		var user1 User
		//if err := c.ShouldBind(&user); err != nil {
		if err := c.ShouldBindBodyWith(&user, binding.JSON); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"Content-Type": contentType,
				"Message":      "请求参数错误" + err.Error(),
			})
			return
		}
		//if err := c.ShouldBind(&user1); err != nil {
		if err := c.ShouldBindBodyWith(&user1, binding.JSON); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"Content-Type": contentType,
				"Message":      "请求参数错误" + err.Error(),
			})
			return
		}

		// 返回响应
		c.JSON(http.StatusOK, gin.H{
			"Content-Type": contentType,
			"Username":     user.Username,
			"Password":     user.Password,
			"Username1":    user1.Username,
			"Password1":    user1.Password,
		})
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

### 参数绑定后校验

`gin`参数校验使用的是`validator`库，因此具体的校验规则可以去下面的文档中查找

Github：[https://github.com/go-playground/validator](https://github.com/go-playground/validator)

文档：[https://pkg.go.dev/github.com/go-playground/validator](https://pkg.go.dev/github.com/go-playground/validator)

```go
package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

// 参数校验都卸载binding后面，常见的规则有：
// 		required  必选参数
//		omitempty 可选参数
//		max/min/le/lt/ge/gt/eq/ne

type User struct {
	Id       int    `json:"id" binding:"omitempty"`
	Username string `json:"username" binding:"required,min=1,max=20"`
	Password string `json:"password" binding:"required,min=8,max=20"` // 设置字符串长度最低是8
}

func main() {
	// 监听地址
	addr := "127.0.0.1:80"

	// 实例化Gin路由引擎
	r := gin.Default()

	// 注册路由
	r.POST("/", func(c *gin.Context) {
		// 获取Content-Type
		contentType := c.GetHeader("Content-Type")

		// 参数绑定
		var user User
		err := c.ShouldBind(&user)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"Content-Type": contentType,
				"Message":      "请求参数错误" + err.Error(),
			})
			return
		}

		// 返回响应
		c.JSON(http.StatusOK, gin.H{
			"Content-Type": contentType,
			"Id":           user.Id,
			"Username":     user.Username,
			"Password":     user.Password,
		})
	})

	// 启动Gin Server
	log.Fatalln(r.Run(addr))
}
```

**输出结果**

![image-20220507144553806](https://tuchuang-1257805459.cos.accelerate.myqcloud.com/image-20220507144553806.png)
