#golang #结构体

# 结构体
在Go语⾔中不存在Class类的概念,但是可以通过结构体struct来实现.结构体就是⼀种相同类型,或者不同类型的数据构成的数据的集合.⾥⾯的每⼀个变量叫做成员变量,也就是结构体的字段,每⼀个字段拥有⾃⼰的数据类型和数值.

## 结构体的实例化
 结构体定义之后也只是确定了这个结构长什么样⼦,都有哪些字段,并没有真实的数据,所以需要使⽤结构体时必须先实例化结构体.

```go
package struct_test

import (
    "fmt"
    "testing"
)

//定义结构体
type Person struct {
    name    string
    age     int
    sex     string
    address string
}

func TestStructStatement(t *testing.T) {
    fmt.Println("结构体声明")
    //实例化后并使⽤结构体
    p := Person{} //使⽤简短声明⽅式，后⾯加上{}代表这是结构体
    p.age = 18    //给结构体内成员变量赋值
    p.address = "北京"
    p.name = "张三"
    p.sex = "男"
    fmt.Println(p.age, p.address, p.name, p.sex) //使⽤点.来访问结构体内成员的变量的值。

    /*
        === RUN   TestStructStatement
        结构体声明
        18 北京 张三 男
        --- PASS: TestStructStatement (0.00s)
        PASS
        ok      gonotes/struct  0.453s
    */
    //直接给成员变量赋值
    p2 := Person{age: 18, address: "北京", name: "lisi", sex: "⼥"}
    fmt.Println(p2.age, p2.address, p2.name, p2.sex)

    /*
        === RUN   TestStructStatement
        结构体声明
        18 北京 张三 男
        18 北京 lisi ⼥
        --- PASS: TestStructStatement (0.00s)
        PASS
        ok      gonotes/struct  0.434s
    */

}

```
在开发过程中经常会以下⾯这种使⽤函数封装写法,来实例化⼀个结构体.
```go
package struct_test

import (
    "fmt"
    "testing"
)

//定义结构体
type Personv2 struct {
    name string
    age  int
    sex  string
}

func TestStructStatementV2(t *testing.T) {
    p := newPerson("wagner", 18, "男")
    fmt.Println(p.name, p.age, p.sex)
}

//使⽤函数来实例化结构体
func newPerson(name string, age int, sex string) *Personv2 {
    return &Personv2{
        name: name,
        age:  age,
        sex:  sex}
}

/*
=== RUN   TestStructStatementV2
wagner 18 男
--- PASS: TestStructStatementV2 (0.00s)
PASS
ok      gonotes/struct  (cached)
*/

```
## 结构体初始化
结构体内的每⼀个字段,都有⾃⼰相应的数据类型,如果结构体被实例化后,字段的默认值就是该字段类型的零值,int就是0,string就是"" ,如果是指针类型,默认就是nil .
初始化时可以忽略成员内的字段名,但是必须和结构体内字段顺序⼀致.

## 匿名结构体
匿名结构体就是没有类型名称,也不需要type关键字,可以直接使⽤.
```go
package struct_test

import (
    "fmt"
    "testing"
)

func TestStructAnonymouns(t *testing.T) {
    fmt.Println("匿名结构体")
    p := struct {
        name string
    }{
        name: "zhangsan",
    }
    fmt.Println(p.name)
}

```

## 结构体嵌套
结构体可以包含多个字段,每⼀个字段都需要相应的数据类型,结构体也属于⼀种数据类型,所以结构体内部也可以包含另⼀个结构体.

```go
package struct_test

import (
    "fmt"
    "testing"
)

// 结构体1

type P1 struct {
    name string
    age  int
    addr Addr
}

// 结构体2
type Addr struct {
    addr string
}

// 也可以嵌套结构体指针
type P2 struct {
    name string
    age  int
    addr *Addr
}

func TestStructNested(t *testing.T) {
    fmt.Println("结构体嵌套")
    p := P1{}
    p.name = "章三"
    p.age = 18
    p.addr = Addr{addr: "beijing"}
    fmt.Println(p) //{章三 18 {beijing}}
    //结构体初始化可以使⽤上⾯两种格式将字段名和对应的值写在括号内，使⽤(字段名:值,)的格式填充
    //第⼆种初始化的⽅式，定义好结构体之后使⽤重新赋值的⽅式:使⽤(变量.字段名=值)的格式

    //嵌套结构体指针
    pr := P2{}
    pr.name = "lisi"
    pr.age = 22
    pre := Addr{}
    pre.addr = "chaoyang"
    pr.addr = &pre
    fmt.Println(pr) //{lisi 22 0xc000096520}
}
```
## 结构体与Json数据的相互转换
JSON是⼀种特殊格式的字符串,⽤来传输和存储数据,在使⽤api服务开发提供给前端的数据时,更多使⽤json数据交互.
Go 语⾔标准库中提供了json解析的包,使⽤之前导⼊包.`import "encoding/json"`

### 结构体转json字符串
> 需要注意的是将结构体转换为Json数据时候,定义结构体的字段必须⾸字母⼤写.否则⽆法正常解析.

```go
package struct_test

import (
    "encoding/json"
    "fmt"
    "testing"
)

//结构体
type Person1 struct {
    Name string
    Addr *Addr1
}

// 结构体2
type Person2 struct {
    Name string `json:"name"`
    Addr *Addr1 `json:"addr,omitempty"`
}

//地址结构体
type Addr1 struct {
    Addr string
}

func TestStructToJson(t *testing.T) {
    fmt.Println("结构体转json")
    p := Person1{}
    p2 := Person2{}
    p.Name = "张三"
    p2.Name = "李四"
    a := Addr1{}
    a.Addr = "beijing"
    p.Addr = &a
    buf, err := json.Marshal(p) //转换为json返回两个结果
    if err != nil {
        fmt.Println("err = ", err)
        return
    }
    fmt.Println("json = ", string(buf))
    /*
        结果 json =  {"Name":"张三","Addr":{"Addr":"beijing"}}
        从结果可以看出其中json字符中每⼀个key的⾸字母也是⼤写，
        如果没有设置数据的字段的结果为null。
        如何强制将他变为⼩写的。并且将不需要显⽰的字段隐藏掉。就需要在结构体上添加标记。
    */

    buf2, err := json.Marshal(p2) //转换为json返回两个结果
    if err != nil {
        fmt.Println("err = ", err)
        return
    }
    fmt.Println("json = ", string(buf2))
    /*
        结果：json =  {"name":"李四"}
    */
}
```

### json字符串转结构体
```go
package struct_test

import (
    "encoding/json"
    "fmt"
    "testing"
)

type Person3 struct {
    Name string `json:"name"` //指定json字段为⼩写输出
}

func TestJsonToStruct(t *testing.T) {
    fmt.Println("json字符串转结构体")
    jsonstr := `{"name":"王二"}`
    var p Person3
    if err := json.Unmarshal([]byte(jsonstr), &p); err != nil {
        fmt.Println(err)
    }
    fmt.Printf("结构体:%+v\n", p) // %+v 将结构体的字段名称打印出来
    // 结构体:{Name:王二}

}

```