#golang  #函数

# 函数
函数代表了代码执⾏的逻辑，Go语⾔中函数的关键字是func加上函数名，参数列表，返回值和函数体，构成⼀个函数。我们在 开发⼀个程序中⼀定会包含很多个函数
```go
func main(){ //这是⼀个特殊的函数 由系统⾃动调⽤ }

func funcname(parametername1 type1,parametername2 type2)(output1 type1,output2 type2){ 
	//处理逻辑 //返回 go语⾔⽀持多返回值，⼀个函数可以返回多个结果 
	return value1,value2 
}
```


## 函数的声明
我们⾃定义函数的时候，需要注意按照规则定义必须满⾜以下格式：函数的名字可以由字母和数字组成，但是不能是数字开头，函数的⾸字母区分⼤⼩写，如果是⼤写的表⽰公共的函数,其他包内可以调⽤到;如果是⼩写的,表⽰私有的函数,仅能够在本包中调⽤.

## 函数的使用
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFuncOperate(t *testing.T) {
    num := getSum() //函数的调⽤
    fmt.Printf("100以内之和为%d\n", num)
}

//定义函数 求1-100的和
func getSum() int {
    sum := 0
    for i := 0; i <= 100; i++ {
        sum += i
    }
    return sum
}

```
函数必须先定义才能使⽤,而且函数名还不能重复,main函数是程序中特殊的函数，其他⾃⼰定义的函数不能叫这个名字

## 函数的参数
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFuncParams(t *testing.T) {
    //函数的调⽤
    sum := getSum2(30)      //这⾥30 作为实参传递给⽅法
    fmt.Printf("%d\n", sum) //465
}

//定义函数 num为形参⽤于接收调⽤⽅传递过来的参数
func getSum2(num int) int {
    sum := 0
	for i := 0; i <= num; i++ {
        sum += i
    }
    return sum
}
```
### 函数作为参数传递
Go语⾔中函数也是⼀种数据类型，也可以跟其他数据类型⼀样当函数的参数。调⽤变量时候也就相当于调⽤函数了。
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFuncParams(t *testing.T) {
    //函数的调⽤
    sum := getSum2(30)      //这⾥30 作为实参传递给⽅法
    fmt.Printf("%d\n", sum) //465

    //声明⼀个变量f
    var f func()

    //将⾃定义函数myfunc 赋给变量f
    f = myfunc
    //调⽤变量f 相当于调⽤函数myfunc()
    f()

}

//定义函数 num为形参⽤于接收调⽤⽅传递过来的参数
func getSum2(num int) int {
    sum := 0
    for i := 0; i <= num; i++ {
        sum += i
    }
    return sum
}

//⾃定义函数
func myfunc() {
    fmt.Println("myfunc...")
}

```

## 函数的返回值
函数可以定义多个返回值，并且返回值类型，返回值数量都必须是⼀⼀对应的， _ 空⽩标识符，舍弃返回的数据。

```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFucnReturn(t *testing.T) {
    fmt.Println("函数的返回值")
    num, ok := getnum()
    fmt.Println(num, ok)
}

// 返回值类型数字和字符串
func getnum() (int, string) {
    return 12, "ok"
}
```

## 变量的作用域
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFuncScope(t *testing.T) {
    fmt.Println("变量在函数中的作用域")
    x := 2
    test()
    fmt.Printf("x的值:%d\n", x)
    if i := 2; i <= 30 {
        x := 20
        fmt.Println(x) //if语句内部定义的x,当没if内没有定义时就会往上找
    }
    // fmt.Println("index", i) //if内部定义的i if之外就不能访问了
}
//函数外部定义全局变量
//全局变量不⽀持简短定义⽅法 n:=0
var n = 3 //全局变量可以随意被修改 如果不想被修改可以定义为常量
func test() {
    // fmt.Print(x)   //undefined: x 未定义 x是main函数中定义的变量 所以不能访问
    fmt.Println(n) //n是全局变量 任何地⽅都可以访问
}
```

## 匿名函数
匿名也就是没有名字的函数,定义⼀个匿名函数直接加上()就相当于直接调⽤了,通常只能调⽤⼀次，可以将匿名函数赋值给⼀个变量,这个变量就代表了 这个函数,则可以调⽤多次.
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestAnonymousFunc(t *testing.T) {
    // 定义匿名函数
    func() {
        fmt.Println("匿名函数")
    }()

    func(a int, b int) { 
        fmt.Println(a, b) 
        }(1, 2) //括号内为匿名函数的实参

    res := func(a int, b int) int { 
        return a + b 
        }(1, 2) 
    fmt.Println(res) //打印匿名函数返回值

}
```

匿名函数可以作为另⼀个函数的参数,也可以作为另⼀个函数的返回值.
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestAnonymousFunc(t *testing.T) {
    // 定义匿名函数
    func() {
        fmt.Println("匿名函数")
    }()

    func(a int, b int) {
        fmt.Println(a, b)
    }(1, 2) //括号内为匿名函数的实参

    res := func(a int, b int) int {
        return a + b
    }(1, 2)
    fmt.Println(res) //打印匿名函数返回值

    res2 := oper(20, 12, add)
    fmt.Printf("res2的值:%v\n", res2)

    //匿名函数作为回调函数直接写⼊参数中
    res3 := oper(2, 4, func(a, b int) int {
        return a + b
    })
    fmt.Printf("res3的值:%v\n", res3)
}

// 定义用于相加的函数
func add(a, b int) int {
    return a + b
}

//oper就叫做⾼阶函数
//fun 函数作为参数传递则fun在这⾥叫做回调函数
func oper(a, b int, fun func(int, int) int) int {
    // fmt.Println(a, b, fun) //20 12 0x49a810A 第三个打印的是传⼊的函数体内存地址
    fmt.Printf("第一个参数%v\t第二个参数%v\n", a, b)
    res := fun(a, b) //fun 在这⾥作为回调函数 程序执⾏到此之后才完成调⽤
    return res
}
```
根据go语⾔的数据类型的特点,函数也是⼀种类型,所以可以将⼀个函数作为另⼀个函数的参数传递func1()和func2()是两个函数,将func1函数作为func2这个函数的参数,func2函数就叫做⾼阶函数,因为他接收了⼀个函数作为参数.所以func1叫做回调函数,它作为另⼀个函数的参数.

## defer语句
defer表⽰延时推迟的意思,在go语⾔中⽤来延时⼀个函数或者⽅法的执⾏.如果⼀个函数或者⽅法添加了defer关键字,表⽰则暂时不执⾏,等到主函数的所有⽅法都执⾏完后才开始执⾏.当多个函数被defer的时候他们被添加到⼀个堆栈中,并且根据先进后出的原则执⾏. 即 Last In First Out（LIFO）

```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFuncDefer(t *testing.T) {
    defer deferTest(1) //第⼀个被defer的，函数后执⾏
    defer deferTest(2) //第⼆个被defer的，函数先执⾏
    deferTest(3)       //没有defer的函数，第⼀次执⾏
}

func deferTest(s int) {
    fmt.Println(s)
}

```
defer函数调⽤时候,参数已经传递了.只不过代码暂时不执⾏⽽已,等待主函数执⾏结束后,才会去执⾏.
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFuncDefer(t *testing.T) {
    defer deferTest(1) //第⼀个被defer的，函数后执⾏
    defer deferTest(2) //第⼆个被defer的，函数先执⾏
    deferTest(3)       //没有defer的函数，第⼀次执⾏
}

func TestFuncDefer2(t *testing.T) {
    a := 10
    defer deferTest(a) //此时a已经作为10 传递出去了 只是没有执⾏
    a++                //a++ 不会影响defer函数延迟执⾏结果
    deferTest(a)
}

func deferTest(s int) {
    fmt.Println(s)
}

```
## 闭包
go语⾔⽀持将⼀个函数作为参数传递,也⽀持将⼀个函数作为返回值.⼀个外层函数当中有内层函数,这个内层函数会操作外层函数的局部变量.并且，外层函数把内层函数作为返回值,则这⾥内层函数和外层函数的局部变量，统称为闭包结构 . 这个外层函数的局部变量的⽣命周期会随着发⽣改变,原本当⼀个函数执⾏结束后.函数内部的局部变量也会随之销毁.但是闭包结构内的局部变量不会随着外层函数的结束⽽销毁.
```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestFuncClosure(t *testing.T) {
    fmt.Println("闭包")
    res := closure()
    r1 := res()               //执⾏closure函数返回的匿名函数
    fmt.Printf("r1:%v\n", r1) //1
    r2 := res()
    //普通的函数应该返回1，⽽这⾥存在闭包结构所以返回2 。
    fmt.Printf("r2:%v\n", r2) //2
    //⼀个外层函数当中有内层函数，这个内层函数会操作外层函数的局部变量,
    //并且外层函数把内层函数作为返回值,则这⾥内层函数和外层函数的局部变量,统称为闭包结构
    //所以上⾯打印的r2 是累计到2 。

    res2 := closure() //再次调⽤则产⽣新的闭包结构 局部变量则新定义的
    r3 := res2()
    fmt.Printf("r3:%v\n", r3) //1
}

//定义⼀个闭包结构的函数 返回⼀个匿名函数
func closure() func() int {
    //外层函数
    //定义局部变量a
    a := 0 //外层函数的局部变量 //定义内层匿名函数 并直接返回
    return func() int {
        //内层函数
        a++ //在匿名函数中将变量⾃增。内层函数⽤到了外层函数的局部变量，此变量不会随着外层函数的结束销毁
        return a
    }
}
```
## panic() 和 recover()

panic宕机,recover恢复,panic 表⽰恐慌.当程序遇到⼀个异常时候可以强制执⾏让程序终⽌操作,同时需要引⼊defer函数类延时操作后⾯的函数,在defer函数中通过recover来恢复正常代码的执⾏,因为defer是根据先⼊后出原则,所以先被defer的函数会放在最后执⾏,recover需要放在第⼀个被执⾏.当遇到panic时候恢复正常的代码逻辑,同时也可将错误信息通过 recover获取panic传递的错误信息

```go
package fuc_test

import (
    "fmt"
    "testing"
)

func TestPanic(t *testing.T) {
    fmt.Println("panic和recover")
    func_panic()
}

func func_panic() {

    defer func() {
        ms := recover()            //这⾥执⾏恢复操作
        fmt.Println(ms, "恢复执⾏了..") //恢复程序执⾏,且必须在defer函数中执⾏
    }()
    defer fmt.Println("第1个被defer执⾏")
    defer fmt.Println("第2个被defer执⾏")
    for i := 0; i <= 6; i++ {
        if i == 4 {
            panic("中断操作") //让程序进⼊恐慌 终端程序操作
        }

    }

    defer fmt.Println("第3个被defer执⾏") //恐慌之后的代码是不会被执⾏的

    /*
        === RUN   TestPanic
        panic和recover
        第2个被defer执⾏
        第1个被defer执⾏
        中断操作 恢复执⾏了..
        --- PASS: TestPanic (0.00s)
        PASS
        ok      gonotes/func    0.463s

    */

}

```