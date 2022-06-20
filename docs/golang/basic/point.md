#golang #指针

# 指针
指针是存储另⼀个变量的内存地址的变量,Go语⾔中通过 & 获取变量的地址.通过 * 获取指针所对应的变量存储的数 值.

## 声明
```go
package point

import (
    "fmt"
    "testing"
)

// int float string 数组 都是属于值类型

func TestPointStatement(t *testing.T) {
    fmt.Println("指针的定义")
    //定义⼀个变量
    var a int = 2
    fmt.Printf("变量a的地址为%p\n", &a) //通过%p占位符, &符号获取变量的内存地址。变量A的地址为0xc0000162d0

    //创建⼀个指针
    //指针的声明 通过 *T 表示T类型的指针
    var i *int                  //int类型的指针
    var f *float64              //float64类型的指针
    fmt.Printf("指针i得值:%v\n", i) // < nil >空指针
    fmt.Printf("指针f得值:%v\n", f) // < nil >空指针

    //因为指针存储的变量的地址 所以指针存储值
    i = &a
    fmt.Printf("i赋值后为:%v\n", i) //i存储a的内存地址0xc0000162d0
    fmt.Println(*i)             //i存储这个指针存储的变量的数值2
    *i = 100
    fmt.Println(*i) //100
    fmt.Println(a)  //100通过指针操作 直接操作的是指针所对应的数值
}

```
## 数组指针
数组的指针,⾸先是他是⼀个指针, 指向⼀个数组,存储数组的地址.

```go
package point

import (
    "fmt"
    "testing"
)

func TestPointArray(t *testing.T) {
    fmt.Println("数组指针")

    //创建⼀个普通的数组
    // var arr [3]int = [3]int{1, 2, 3}
    arr := [4]int{1: 1, 2: 2, 3: 3}
    fmt.Printf("数组%v\n", arr)

    //创建⼀个指针 ⽤来存储数组的地址即：数组指针
    var p *[4]int             //将数组arr的地址，存储到数组指针p上。
    fmt.Printf("数组指针%v\n", p) //数组的指针 &[1 2 3] 后⾯跟数组的内容

    p = &arr

    //获取数组指针中的具体数据 和数组指针⾃⼰的地址
    fmt.Printf("指针p的值%v\n", *p)  //指针所对应的数组的值
    fmt.Printf("指针p的地址%v\n", &p) //该指针⾃⼰的地址0xc00000e048

    //修改数组指针中的数据
    (*p)[0] = 100
    fmt.Println(arr) //[100 1 2 3]

    //简化写法
    p[1] = 200
    fmt.Println(arr) //结果： [100 200 2 3]
}

```

## 指针数组
其实就是⼀个数组,存储的数据类型是指针
```go
package point

import (
    "fmt"
    "testing"
)

func TestArrayPoint(t *testing.T) {
    fmt.Println("指针数组")

    //定义四个变量
    a, b, c, d := 1, 2, 3, 4
    arr1 := [4]int{a, b, c, d}
    arr2 := [4]*int{&a, &b, &c, &d} //将所有变量的指针，放进arr2⾥⾯

    fmt.Printf("arr1的值%v\n", arr1) //arr1的值[1 2 3 4]

    fmt.Printf("数组指针arr2%v\n", arr2) // 数组指针arr2[0xc0001161e0 0xc0001161e8 0xc0001161f0 0xc0001161f8]

    arr1[0] = 100 //修改arr1中的值

    fmt.Println("修改后arr1的值：", arr1) // [100 2 3 4]

    fmt.Println("a=", a) //变量a的值还是1，相当于值传递，只修改了数值的副本。

    //修改指针数组
    *arr2[0] = 100 //修改指针的值
    fmt.Printf("修改后的arr2%v\n", arr2)
    fmt.Println("a=", a) //100

    //循环数组，⽤*取数组中的所有值。
    //引⽤传递 修改的是内存地址所对应的值 所以a也修改了

    for i := 0; i < len(arr2); i++ {
        fmt.Println(*arr2[i])
    }
}
```
## 指针函数
返回结果是一个指针类型的函数就是一个指针函数
```go
package point

import (
    "fmt"
    "testing"
)

func TestPointFunc(t *testing.T) {
    fmt.Println("指针函数")
    a1 := fun1()
    fmt.Printf("a1的类型：%T,a1的地址是%p 数值为%v \n", a1, &a1, a1) //[]int,a1的地址是0xc00000c048 数值为[1 2 3]

    a2 := fun2()
    fmt.Printf("a2的类型：%T,a2的地址是%p 数值为%v \n", a2, &a2, a2) //*[]int,a2的地址是0xc00000e048 数值为&[1 2 3 4]
    fmt.Printf("a2的值为：%p\n", a2)                          //0xc00000c090 指针函数返回的就是指针
}

//⼀般函数
func fun1() []int {
    c := []int{1, 2, 3}
    return c
}

//指针函数 返回指针
func fun2() *[]int {
    c := []int{1, 2, 3, 4}
    fmt.Printf("c的地址为%p：\n", &c)
    return &c

}

```
## 指针参数
指针属于引⽤类型的数据,所以在传递过程中是将参数的地址传给函数,将指针作为参数传递时,只有值类型的数据,需要传递指针,⽽引⽤类型的数据本⾝就是传递的地址.所以数组传递可以使⽤指针,切⽚是引⽤类型数据,则不需要传递指针传递.

```go
package point

import (
    "fmt"
    "testing"
)

func TestPointParams(t *testing.T) {
    fmt.Println("指针参数")
    s := 10
    fmt.Println(s) //调⽤函数之前数值是10
    // fun1(&s)
    funcPointInt(&s)
    fmt.Println(s) //调⽤函数之后再访问则被修改成2
}

//接收⼀个int类型的指针作为参数
func funcPointInt(a *int) {
    *a = 2
}

```