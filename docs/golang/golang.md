---
sidebar: auto
---

# 邂逅Golang
> 入门到放弃

## 函数

用于对代码块的逻辑封装，提供代码复用的最基本方式。

### 函数的定义

函数包含函数名、行参列表、函数体和返回值列表,使用 func 进行声明,函数无参数或返回值时则形参列表和返回值列表省略
```go
func FuncName(parameters) returns {
    body
}
```
### 函数的参数

在声明函数中若存在多个连续行参类型相同可只保留最后一个参数类型名

```go
package main

import "fmt"

/*
合并相同类型参数类型名
*/

func mergeFuncArgsType(n1, n2 int, s1, s2 string) {
	fmt.Println(n1, n2, s1, s2)
	fmt.Printf("%T, %T, %T, %T\n", n1, n2, s1, s2)
}
func main() {
	mergeFuncArgsType(1, 2, "s1", "s2")
}

结果：
1 2 s1 s2
int, int, string, string
```
#### 可变参数

某些情况下函数需要处理行参数量可变，需要运算符 **...**声明可变参数函数或在调用时传递可变参数；在调用函数时,也可以使用运算符…将切片解包传递到可变参数函数中

```go
/*
定义可变参数,可变参数只能定义一个且只能在参数列表末端。 在调用函数后, 可变参数则被初始化为对应类型的切片
*/
func printArgs(n1, n2 int, args ...string) {
	fmt.Printf("%T,%T,%T\n", n1, n2, args)
	fmt.Println(n1, n2, args)
}
func main() {
	// 调用可变参数函数
	printArgs(1, 2, "a", "b", "c")
	//通过切片解包并调用可变参数函数
	printArgs(1, 2, []string{"1", "2", "3"}...)
}

结果：
int,int,[]string
1 2 [a b c]
int,int,[]string
1 2 [1 2 3]
```
### 函数的返回值

在函数提中可以使用return关键字为函数返回结果

#### 多返回值

Go 语言支持函数有多个返回值，在声明函数时使用括号包含所有返回值类型，并使用return返回对应数量的逗号分割数据

```go
package main

import "fmt"

/*
定义多个返回值
*/
func calc(n1, n2 int) (int, int, int, int) {
	//返回四个返回值
	return n1 + n2, n1 - n2, n1 * n2, n1 / n2
}

func main() {
	fmt.Println(calc(5, 3))
}

结果：
8 2 15 1
```

#### 命名返回值

在函数返回值列表中可指定变量名, 变量在调用时会根据类型使用零值进行初始化, 在函数体中可进行赋值,同时在调用return时不需要添加返回值,go语言自动将变量的最终结果进行返回 在使用命名返回值时, 当声明函数中存在若多个连续返回值类型相同可只保留最后一个返回值类型名

```go
package main

import "fmt"

//定义返回多个命名返回值

func calcNew(n1, n2 int) (sum, diff, product, quotient int) {
	sum, diff, product, quotient = n1+n2, n1-n2, n1*n2, n1/n2
	return
}

func main() {
	fmt.Println(calcNew(6, 3))
}

结果：
9 3 18 2
```
### 匿名函数

不需要定义名字的函数叫匿名函数，常用做帮助函数在局部代码中使用或者作为其他函数的参数

```go
package main

import "fmt"

func main() {
	//定义匿名函数并赋值给hi
	hi := func(name string) {
		fmt.Printf("hi, %s\n", name)
	}
	hi("zhangsan")
	hi("lisi")
	//定义匿名函数并调用
	func() {
		fmt.Println("这是个匿名函数")
	}()
}

结果：
hi, zhangsan
hi, lisi
这是个匿名函数
```
### 闭包
是指在函数中定义的匿名函数引用外部函数的变量，只要匿名函数继续使用则外部函数赋值的变量不被自动销毁

```go
package main

import "fmt"

//定义闭包函数，返回一个匿名函数用于计算与base元素的和
func addBase(base int) func(int) int {
	return func(num int) int {
		return base + num
	}
}
func main() {
	//使用闭包函数
	base2 := addBase(2)
	base10 := addBase(10)
	fmt.Println(base2(1), base2(3), base10(1), base10(5))
}

结果：
3 5 11 15
```
### 值类型&引用类型
值类型和引用类型的差异在于赋值同类型新变量后，对新的变量进行修改是否能够影响原来的变量，若不能影响就是值类型，若影响则为引用类型。

```go
package main

import "fmt"

func main() {
	name, age, height, isBoy := "zhangsan", 18, 1.85, true //定义字符串、数值、布尔类型
	pointer := new(int)                                    //定义指针类型
	scores := [...]int{1, 2, 3, 4}                         //定义数组
	names := make([]string, 1, 3)                          //定义切片类型
	user := make(map[int]int)                              //定义映射类型
	name2, age2, height2, isBoy2, pointer2, scores2, names2, user2 := name, age, height, isBoy, pointer, scores, names, user
	name2 = "hhh"
	age2 = 1000
	height2 = 2.00
	isBoy2 = false
	pointer2 = &age
	names2[0] = "ss"
	scores2[0] = 100
	user2[1] = 100
	fmt.Println(name, age, height, isBoy, pointer, scores, names, user)
	fmt.Println(name2, age2, height2, isBoy2, pointer2, scores2, names2, user2)
}

结果：
zhangsan 18 1.85 true 0xc0000b4010 [1 2 3 4] [ss] map[1:100]
hhh 1000 2 false 0xc0000b4008 [100 2 3 4] [ss] map[1:100]
```
根据上面例子可以得出：

- 值类型：
    
    数组、布尔、字符串、指针、数字、结构体等；

- 引用类型：
    
    切片、映射、接口等

针对值类型可以借助指针修改原值，针对值类型和引用类型在赋值后新旧变量的地址并不相同，只是引用类型在底层共享数据结构。

```go
package main

import "fmt"

func main() {
	e1, e2 := 123, []string{"abc"}
	//值传递
	//在函数内修改值类型
	fmt.Printf("e1: %p %v\n", &e1, e1)
	func(e int) {
		fmt.Printf("e: %p %v\n", &e, e)
		e = 456
	}(e1)

	//引用类型
	fmt.Printf("e2: %p %v\n", &e2, e2)
	func(e []string) {
		fmt.Printf("e: %p %v\n", &e, e)
		e[0] = "aaaa"
	}(e2)
	fmt.Printf("结束e1: %v, e2: %v\n", e1, e2)

	//值类型
	//在函数内修改值类型
	fmt.Printf("e1:%p %v\n", &e1, e1)
	func(e *int) {
		fmt.Printf("e:%p %v\n", e, *e)
		*e = 100
	}(&e1)
	// 在函数内修改引用类型
	fmt.Printf("e2:%p %v\n", &e2, e2)
	func(e *[]string) {
		fmt.Printf("e:%p %v\n", e, *e)
		(*e)[0] = "abcssss" // 先用括号
	}(&e2)
	fmt.Printf("结束----e1: %v, e2: %v\n", e1, e2)
}


结果：
e1: 0xc0000140a8 123
e: 0xc0000140d0 123
e2: 0xc00000c060 [abc]
e: 0xc00000c0a0 [abc]
结束e1: 123, e2: [aaaa]
e1:0xc0000140a8 123
e:0xc0000140a8 123
e2:0xc00000c060 [aaaa]
e:0xc00000c060 [aaaa]
结束----e1: 100, e2: [abcssss]
```
## 结构体

Go语⾔中数组可以存储同⼀类型的数据，但在结构体中我们可以为不同项 定义不同的数据类型.
结构体是由⼀系列具有相同类型或不同类型的数据构成的数据集合.

### 结构体的定义
```golang
type 类型名 struct{
	成员属性1 类型1
	成员属性2 类型2
	成员属性3 成员属性4 类型3 
}
类型名:标识结构体的名称，在同⼀个包内不能重复.
结构体中属性，也叫字段必须唯⼀.
同类型的成员属性可以写在⼀⾏。
```
例如:
```golang
//定义结构体
type Person struct {
	name string
	age int
	sex string
	address string
}
```

### 结构体的实例化

结构体的定义只是⼀种内存布局的描述,只有当结构体实例化时,才会真正分配内存。因此必须在定义结构体并实例化后才能使⽤结构体;实例化就是根据结构体定义的格式创建⼀份与格式⼀致的内存区域。结构体实例之间的内存是完全独⽴的。

+ var声明⽅式实例化结构体，初始化⽅式为：对象.属性=值

```golang
var p1 Person
p1.name = "张三"
p1.age = 30
p1.sex = "男"
p1.address = "北京"
fmt.Printf("姓名：%s, 年龄: %d,性别: %s, 地址:%s\n", p1.name, p1.age, p1.sex, p1.address)

结果：
姓名：张三, 年龄: 30,性别: 男, 地址:北京
```

+ 变量简短声明格式实例化结构体，初始化⽅式为：对象.属性=值

```golang
p2 := Person{}
p2.name = "李四"
p2.age = 33
p2.sex = "男"
p2.address = "北京"
fmt.Printf("姓名：%s, 年龄: %d,性别: %s, 地址:%s\n", p2.name, p2.age, p2.sex, p2.address)

结果:
姓名：李四, 年龄: 33,性别: 男, 地址:北京
```

+ 变量简短声明格式实例化结构体,声明时初始化。初始化⽅式为：属性:属性:值可以同⾏,也可以换⾏.

```golang
p3 := Person{
	name: "王二",
	age: 31,
	sex: "男",
	address: "通州", //一定别忘记这个逗号
}
fmt.Printf("姓名：%s, 年龄: %d,性别: %s, 地址:%s\n", p3.name, p3.age, p3.sex, p3.address)


结果:
姓名：王二, 年龄: 31,性别: 男, 地址:通州
```

+ 指针类型结构体

```golang
/*使⽤内置函数new()对结构体进⾏实例化,
结构体实例化后形成指针类型的结构体new内置函数会分配内存.
第⼀个参数是类型,⽽不是值,返回的值是指向该类型新分配的零值的指针,该函数⽤于创建某个类型的指针。 */
p4 := new(Person)
(*p4).name = "麻子"
(*p4).age = 31
p4.sex = 0 //语法简写形式,语法糖,数组也支持，但是切片不支持这种。
p4.address = "朝阳"

```



### 结构体是值类型
```golang
package main

import "fmt"

type Person struct {
	name string
	age  int8
	sex  byte
}

//传对象修改名称
func changeName(p Person) {
	p.name = "lisi"
	fmt.Printf("函数内p修改后=%T , %v , %p \n", p, p, &p)
}
func main() {
	//初始化Person
	p1 := Person{
		name: "zhangsan",
		age:  18,
		sex:  1,
	}
	fmt.Printf("h1：%T , %v , %p \n", p1, p1, &p1)

	fmt.Println("----------------------")

	//将结构体对象进⾏拷⻉
	p2 := p1
	p2.name = "wanger"
	p2.age = 20
	fmt.Printf("p1修改后=%T , %v , %p \n", p2, p2, &p2)
	fmt.Printf("p1：%T , %v , %p \n", p2, p2, &p2)
	fmt.Println("----------------------")
	//将结构体对象作为参数传递
	changeName(p1)
	fmt.Printf("p1：%T , %v , %p \n", p1, p1, &p1)
	fmt.Println("----------------------")
}

结果：
p1：main.Person , {zhangsan 18 1} , 0xc0000a6018 
----------------------
p1修改后=main.Person , {wanger 20 1} , 0xc0000a6060 
p1：main.Person , {wanger 20 1} , 0xc0000a6060 
----------------------
函数内p修改后=main.Person , {lisi 18 1} , 0xc0000a60d8 
p1：main.Person , {zhangsan 18 1} , 0xc0000a6018 
----------------------
```
### 结构体的深拷⻉和浅拷⻉

+ 值类型是深拷⻉
+ 引⽤类型是浅拷⻉

```goland
package main

import "fmt"

type Dog struct {
	name  string
	color string
	age   int8
}

func main() {
	//1、实现结构体的深拷贝
	d1 := Dog{"旺财", "黑色", 2} //Dog
	fmt.Printf("d1:%T,%v,%p\n", d1, d1, &d1)
	d2 := d1 //深拷贝
	fmt.Printf("d2:%T,%v,%p\n", d2, d2, &d2)
	/*
		输出：
		d1:main.Dog,{旺财 黑色 2},0xc000070180
		d2:main.Dog,{旺财 黑色 2},0xc000070210
	*/
	//修改d2的属性，d1是否改变？
	d2.name = "小狗"
	fmt.Printf("D2修改后=%v\n", d2)
	fmt.Printf("D1=%v\n", d1)
	/*
		输出：
		D2修改后={小狗 黑色 2}
		D1={旺财 黑色 2}，因此得出d1不会因为d2的改变而改变
	*/

	//通过&实现结构体的浅拷贝
	d3 := &d1
	fmt.Printf("d3:%T,%v,%p\n", d3, d3, &d3)
	/*
		输出：
		d3:*main.Dog,&{旺财 黑色 2},0xc00010e020
	*/
	//修改d3的属性，d1是否改变?
	d3.age = 4
	fmt.Printf("D3修改后=%v\n", d3)
	fmt.Printf("D1=%v\n", d1)
	/*
	输出：
	D3修改后=&{旺财 黑色 4}
	D1={旺财 黑色 4}
	因此可以得出浅拷贝会改变的
	*/

}

```

### 匿名结构体和匿名字段

#### 匿名结构体

+ 没有名字的结构体,无需通过type关键字定义就可以直接使用
+ 在创建匿名结构体时同时也创建了对象
+ 匿名结构体由结构体的定义和初始化两部分组成
+ 语法格式: 
变量名 =: struct {//定义成员属性}{//初始化成员属性}

```golang
package main

import "fmt"

func main() {
	addr := struct {
		province, city string
	}{"北京市", "通州区"}
	fmt.Println(addr)
	/*
		输出：
		{北京市 通州区}
	*/
}


```
#### 结构体匿名字段
+ 结构体中的字段没有名字,只包含一个没有字段名的类型,这些字段为匿名字段
+ 如果字段没有名字,那么默认使用类型作为字段名
+ 同一个类型只能写一个
+ 结构体嵌套中采用匿名结构体字段可以模拟继承关系

```golang
package main

import "fmt"

type User struct {
	string
	byte
	int8
	float64
}

func main() {
	//实例化结构体
	user := User{"张三", 'm', 28, 180.0}
	//依次获取姓名、性别、年龄、身高
	fmt.Printf("姓名：%s , 性别：%c , 身⾼：%.2f ， 年龄：%d \n", user.string, user.byte, user.float64, user.int8)

	/*
		输出：
		姓名：张三 , 性别：m , 身⾼：180.00 ， 年龄：28
	*/
}

```
#### 结构体的嵌套

+ 将一个结构体作为另一个结构体的属性(字段),这种结构就是结构体嵌套
+ 结构体嵌套可以作为面向对象中的两种关系
	+ 聚合关系:一个类作为另外一个类的属性
	+ 继承关系:一个类作为另外一个类的子类
```golang
package main

import "fmt"

type Address struct {
	province, city string
}

type Person struct {
	name    string
	age     int
	address Address
}

func main() {

	//聚合关系
	p := Person{}
	p.name = "张三"
	p.age = 18
	addr := Address{}
	addr.province = "北京市"
	addr.city = "通州区"
	p.address = addr
	fmt.Println(p)
	fmt.Println("姓名:", p.name)
	fmt.Println("年龄:", p.age)
	fmt.Println("省:", p.address.province)
	fmt.Println("市:", p.address.city)
	fmt.Println("---------------------")
	/*
		输出：
		{张三 18 {北京市 通州区}}
		姓名: 张三
		年龄: 18
		省: 北京市
		市: 通州区
		---------------------
	*/

	//修改Person对象的数据，是否影响Address对象？
	p.address.city = "昌平区"
	fmt.Println("姓名:", p.name)
	fmt.Println("年龄:", p.age)
	fmt.Println("省:", p.address.province)
	fmt.Println("市:", p.address.city)
	fmt.Println("---------------------")
	fmt.Println("市:", addr.city) //没有影响
	/*
		输出：
			姓名: 张三
			年龄: 18
			省: 北京市
			市: 昌平区
			---------------------
			市: 通州区
			因此可以看出不受影响
	*/

	//修改Address对象的数据，是否影响Person对象？
	addr.city = "⼤兴区"
	fmt.Println("姓名:", p.name)
	fmt.Println("年龄:", p.age)
	fmt.Println("省:", p.address.province)
	fmt.Println("市:", p.address.city)
	fmt.Println("---------------------")
	/*
		输出：
			姓名: 张三
			年龄: 18
			省: 北京市
			市: 昌平区
			---------------------
			因此可以看出不受影响
	*/
}

```
#### 结构体的继承关系
+ 继承是传统面向对象的三大特征之一，用于描述两个类之间的关系
+ 子类可以有自己的属性，也可以重写父类已有的方法
+ 子类可以直接访问父类所有的属性
+ `提升字段`
	+ 在结构体中属于匿名结构体的字段叫提升字段
+ 继承的意义
	+ 避免重复代码
	+ 扩展类的功能
+ 采⽤匿名字段的形式就是模拟继承关系。⽽模拟聚合关系时⼀定要采⽤有名字的结构体作为字段.

```golang
package main

import "fmt"

type Person struct {
	Name string
	Age  int
	Sex  string
}

type Student struct {
	Person     //采用匿名结构体字段模拟继承关系
	SchoolName string
}

func main() {
	//1、初始化Person
	p1 := Person{"张三", 18, "男"}
	fmt.Println(p1)
	fmt.Printf("p1: %T , %+v \n", p1, p1)
	fmt.Println("----------------------")

	//2、初始化Student
	//写法1：
	s1 := Student{p1, "北京航空大学"}
	s1.Name = "S1"
	fmt.Println(s1, p1)
	fmt.Printf("s1: %T , %+v \n", s1, s1)
	fmt.Println("----------------------")
	//写法2：
	s2 := Student{Person{"李四", 19, "男"}, "北京外国语大学"}
	fmt.Println(s2)
	fmt.Printf("s2: %T , %+v \n", s2, s2)
	fmt.Println("----------------------")
	/*
		输出：
		{张三 18 男}
		p1: main.Person , {Name:张三 Age:18 Sex:男}
		----------------------
		{{S1 18 男} 北京航空大学} {张三 18 男}
		s1: main.Student , {Person:{Name:S1 Age:18 Sex:男} SchoolName:北京航空大学}
		----------------------
		{{李四 19 男} 北京外国语大学}
		s2: main.Student , {Person:{Name:李四 Age:19 Sex:男} SchoolName:北京外国语大学}
		----------------------
	*/
}
```
### 方法
+ Go语言同时有函数和方法,方法的本质也是函数.
+ 函数是一段具有独立功能的代码,可以被反复调用,方法是一个类的行为功能,只有该类的对象才能调用。
+ 方法有接受者，而函数没有接受者
	+ Go语言的方法是一种作用于特定类型变量的函数，这种特定类型变量叫做Receiver(接受者)
	+ 接受者的概念类似于传统面向对象语言中的this或self关键字
	+ 一个方法就是一个包含了接受者的函数
	+ 接受者的类型可以是任何类型
+ 方法的语法:
```golang
func (接受者变量 接受者类型) ⽅法名(参数列表) (返回值列表) {
	//⽅法
}
```
```golang
package main

import "fmt"

type User struct {
	name string
}

//定义方法
func (u User) info() {
	fmt.Printf("员⼯姓名：%s  \n", u.name)
}
func main() {

	//实例化结构体

	user1 := User{
		name: "张三",
	}
	//调用方法
	user1.info()

	/*
		输出：
			员⼯姓名：张三
	*/
}

```
#### 方法继承
method是可以继承的，如果匿名字段实现了⼀个method，那么包含这个匿名字段的struct也能调⽤该匿名结构体中的method.
## 接口
### 什么是接口?
+ 面向对象语言中，接口用于定义对象的行为。接口只指定对象应该做什么，实现这种行为的方法是由对象来决定
+ 接⼝只指定了类型应该具有的⽅法，类型决定了如何实现这些⽅法。
+ 当某个类型为接⼝中的所有⽅法提供了具体的实现细节时，这个类型就被称为实现了该接⼝
+ 如果某个对象实现了接⼝定义的所有⽅法，则此对象就实现了该接⼝
### 接口的定义语法
type 接口名字 interface {
	方法1
	方法2
}

```golang
package main

import "fmt"

//1.定义接口
type USB interface {
	start() //USB设备开始工作
	end()   //USB设备结束工作
}

//2.实现类
type Mouse struct {
	name string
}

type FlashDisk struct {
	name string
}

//3.实现方法
func (m Mouse) start() {
	fmt.Println(m.name, "鼠标，准备就绪，可以开始工作了，点点点。。。")
}
func (m Mouse) end() {
	fmt.Println(m.name, "结束工作，可以安全推出。。。。")
}
func (f FlashDisk) start() {
	fmt.Println(f.name, "开始工作，存储数据...")
}
func (f FlashDisk) end() {
	fmt.Println(f.name, "结束工作。可以弹出")
}

func main() {
	/*
		接口：interface
			在go中，接口是一组方法签名
			当某个类型为这个接口中的所有方法提供了方法的实现，它被称为实现接口
	*/
	//创建Mouse类型
	m1 := Mouse{
		name: "罗技",
	}
	fmt.Println(m1.name)
	m1.start()
	/*
		输出：
		罗技
		罗技 鼠标，准备就绪，可以开始工作了，点点点。。。
	*/
}
```