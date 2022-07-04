#golang #方法 #接口

# 方法

在 Go 语⾔中⽅法和函数类似,也可以认为⽅法是特殊类型的函数,只不过⽅法限制了接收者,⽅法也可以说是包含了接收者的函数.

## 结构体类型调用方法

```go
package method

import (
    "fmt"
    "testing"
)

func TestMethodStatement(t *testing.T) {
    fmt.Println("结构体类型调⽤⽅法")
    //使⽤User结构体创建⼀个⻆⾊代表张三

    zhangsan := User{"张三", 10}

    zhangsan.jineng() //调⽤这个结构体的⽅法。
}

//创建⼀个结构体代表⼈物⻆⾊--张三
type User struct {
    Name  string // 姓名
    Level int    //级别
}

//创建⼀个⽅法,只要是User结构体就能调⽤。

func (u User) jineng() {
    kill := 200.0
    ability := "泰拳"
    fmt.Printf("我是:%s，我的等级:%d，我的武功:%s，杀伤⼒%.1f\n", u.Name, u.Level, ability, kill)
}

```

## 指针类型调用方法

```go
package method

import (
    "fmt"
    "testing"
)

func TestMethodStatement(t *testing.T) {
    fmt.Println("结构体类型调⽤⽅法")
    //使⽤User结构体创建⼀个⻆⾊代表张三

    zhangsan := User{"张三", 10}
    zhangsan.jineng() //调⽤这个结构体的⽅法。

    lisi := &User{"李四", 9}
    lisi.jineng2() //调⽤指针类型⽅法
}

//创建⼀个结构体代表⼈物⻆⾊--张三
type User struct {
    Name  string // 姓名
    Level int    //级别
}

//创建⼀个⽅法,只要是User结构体就能调⽤。
func (u User) jineng() {
    kill := 200.0
    ability := "泰拳"
    fmt.Printf("我是:%s，我的等级:%d，我的武功:%s，杀伤⼒%.1f\n", u.Name, u.Level, ability, kill)
}

// 指针类型方法

func (u *User) jineng2() {
    kill := 180.0
    ability := "泰拳"
    fmt.Printf("我是:%s，我的等级:%d，我的武功:%s，杀伤⼒%.1f\n", u.Name, u.Level, ability, kill)
}

/*

    === RUN   TestMethodStatement
    结构体类型调⽤⽅法
    我是:张三，我的等级:10，我的武功:泰拳，杀伤⼒200.0
    我是:李四，我的等级:9，我的武功:泰拳，杀伤⼒200.0
    --- PASS: TestMethodStatement (0.00s)
    PASS
    ok      gonotes/method  3.040s
*/

```

## 方法和函数的区别

1. ⽅法限制某个类别的⾏为,需要指定调⽤者.
2. 函数是⼀段独⽴的功能代码,可以直接调⽤.
3. ⽅法名称可以相同,只要接收者不同就可以,函数命名上不能冲突.

## 面向对象

> 其实在 Go 语⾔中是没有⾯向对象的,我们可以借助结构体,⽅法,接口的实现,来模拟其他语⾔中的⾯向对象的概念。

⾯向对象中的三⼤特征：

1. 封装:在意义上是把许多客观的事物封装成⼀个抽象的类,把⾃⼰的属性 ⽅法只让可信的对象操作.
2. 继承:⼦类可以访问⽗类的属性和⽅法,⼦类也可以拥有⾃⼰的属性和⽅法,⼦类可以重写⽗类的⽅法.
3. 多态:是指⼀个程序中同名的⽅法共存的情况,调⽤者只需使⽤同⼀个⽅法名,系统会根据不同情况调⽤相应的不同⽅法,从⽽实现不同的功能.多态性又被称为“⼀个名字,多个⽅法”.

### 用结构体实现封装

```go
package method

import (
    "fmt"
    "testing"
)

func TestStructPackage(t *testing.T) {
    fmt.Println("使⽤结构体来实现封装")
    //创建⼀个对象
    h := NewPerson("雷锋")
    h.SetAge(18)                    //访问封装的⽅法设置年龄
    fmt.Println(h.Name, h.GetAge()) //使⽤对象封装的⽅法获取年龄

}

// 定义结构体实现封装
type GoodPerson struct {
    Name string
    Age  int
}

//使⽤NewPerson⽅法创建⼀个对象
func NewPerson(name string) *GoodPerson {
    return &GoodPerson{Name: name}
}

// 使⽤SetAge⽅法设置结构体成员的Age
func (h *GoodPerson) SetAge(age int) {
    h.Age = age
}

// 使⽤GetAge⽅法获取成员现在的Age
func (h *GoodPerson) GetAge() int {
    return h.Age
}

```

### 继承的实现

> 继承可以解决代码复⽤的问题,结构体内嵌套⼀个匿名结构体也可以嵌套多层结构体.

```go
package method

import (
    "fmt"
    "testing"
)

func TestInherit(t *testing.T) {
    fmt.Println("方法的继承")
    o := &Ouyangcrazy{
        Name: "欧阳疯",
        Age:  70,
    } //创建⽗类
    o.ToadKongfu() //⽗类对象访问⽗类⽅法

    y := &YangGuo{
        Ouyangcrazy{
            Name: "杨过",
            Age:  18,
        },
        "古墓",
    } //创建⼦类

    fmt.Println(y.Name)    //⼦类对象访问⽗类中有的字段
    fmt.Println(y.Address) //⼦类访问⾃⼰的字段

    y.ToadKongfu() //⼦类对象访问⽗类⽅法
    y.NewKongfu()  //⼦类访问⾃⼰的⽅法
    y.ToadKongfu() //如果存在⾃⼰的⽅法 访问⾃⼰重写的⽅法

    /*
        === RUN   TestInherit
        方法的继承
        欧阳疯 的蛤蟆功！
        杨过
        古墓
        杨过 的新蛤蟆功！
        杨过 ⼦类⾃⼰的新功夫！
        杨过 的新蛤蟆功！
        --- PASS: TestInherit (0.00s)
        PASS
        ok      gonotes/method  0.108s
    */
}

// 创建⼀个结构体起名 Ouyangcrazy 代表⽗类
type Ouyangcrazy struct {
    Name    string
    Age     int
    Ability string
}

//创建⼀个结构体代表⼦类
type YangGuo struct {
    Ouyangcrazy        //包含⽗类所有属性
    Address     string //单独⼦类有的字段
}

// ⽗类的⽅法
func (o *Ouyangcrazy) ToadKongfu() {
    fmt.Println(o.Name, "的蛤蟆功！")
}

//⼦类的⽅法
func (y *YangGuo) NewKongfu() {
    fmt.Println(y.Name, "⼦类⾃⼰的新功夫！")
}

//⼦类重写⽗类的⽅法
func (y *YangGuo) ToadKongfu() {
    fmt.Println(y.Name, "的新蛤蟆功！")
}

```

### 用接口实现多态

> 接⼜内可以定义很多个⽅法,谁将这些⽅法实现,就可以认为是实现了该接口.Go 语⾔的多态,主要是通过接口来实现.

```go
package method

import (
   "fmt"
   "testing"
)

//测试⽅法.需要参数类型为Kongfu接⼝类型的参数
func testInterface(k KongFu) {
   k.Toad()
   k.SixSwords()
}

func TestPolymorphism(t *testing.T) {
   fmt.Println("利用接口实现多态")
   h := Haojiahuo{name: "好家伙"}
   fmt.Println(h.name)
   l := Laolitou{name: "⽼李头"}
   fmt.Println(l.name)
   testInterface(h) // 好家伙 实现了蛤蟆功.. 好家伙 实现了六脉神剑.
   testInterface(l) // ⽼李头 也实现了蛤蟆功.. ⽼李头 也实现了六脉神剑.
   kf := h
   kf.Toad()
   kf1 := l
   kf1.SixSwords()

}

// 定义接口
type KongFu interface {
   Toad()      //蛤蟆功
   SixSwords() //六脉神剑
}

// 定义类
type Haojiahuo struct {
   name string
}

type Laolitou struct {
   name string
}

//实现⽅法
func (o Haojiahuo) Toad() {
   fmt.Println(o.name, "实现了蛤蟆功..")
}

//实现⽅法
func (o Haojiahuo) SixSwords() {
   fmt.Println(o.name, "实现了六脉神剑..")
}

//实现⽅法
func (f Laolitou) Toad() {
   fmt.Println(f.name, "也实现了蛤蟆功..")
}

//实现⽅法
func (f Laolitou) SixSwords() {
   fmt.Println(f.name, "也实现了六脉神剑.")
}

//实现⾃⼰的⽅法
func (f Laolitou) PlayGame() {
   fmt.Println(f.name, "玩游戏..")
}

```

使⽤接口对⽅法进⾏约束,然后让⽅法实现接口,这样规范了⽅法.通过使⽤同样的接口名称,但是在调⽤的时候使⽤不同的类,实现执⾏不同的⽅法.这样就实现了 Go 语⾔中的多态.
