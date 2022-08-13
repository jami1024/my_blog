#golang #并发

# Groutine

## 基本概念

- 并发是指在同⼀个时间点上只能执⾏同⼀个任务,但是因为速度⾮常快,所以就像同时进⾏⼀样.
- 并⾏是指在⼀个时间点上同时处理多个任务.真正的并⾏,是需要电脑硬件的⽀持,单核的 CPU 是⽆法达到并⾏的.并⾏,不⼀定快因为并⾏运⾏时是需要通信的,这种通信的成本还是很⾼的.⽽并发的程序成本很低.
- 进程就是⼀个独⽴功能的程序,⽐如打开⼀ 个 QQ 就是在运⾏⼀个进程.
- 线程是被包含在进程之中的,它是⽐进程更⼩的能独⽴运⾏的基本单位 ⼀个进程可以包含多个线程,例如:打开⽂档在你输⼊⽂字的时候它在后台检测你输⼊的⽂字的⼤⼩写,还有拼写是否正确 ,这就是⼀个线程来检测的.
- 协程属于⼀种轻量级的线程,英⽂名 Goroutine 协程之间的调度由 Go 运⾏时（runtime）管理.

## 什么是 Goroutine

goroutine 协程,是 go 语⾔中特有的名词,在函数或者⽅法前⾯加上关键字 go,就会同时运⾏⼀个新的 goroutine.

```go
package goroutine_test

import (
    "fmt"
    "testing"
)

func TestGoroutineStatement(t *testing.T) {

    fmt.Println("如何创建一个Goroutine")
    go testgo()
    for i := 0; i <= 10; i++ {
        fmt.Println(i)
    }
    fmt.Println("函数结束")
}

//⾃定义函数
func testgo() {
    for i := 0; i <= 10; i++ {
        // time.Sleep(10 * time.Second)
        fmt.Println("测试goroutine", i)
    }
}

/*
=== RUN   TestGoroutineStatement
如何创建一个Goroutine
0
1
2
3
4
5
6
7
8
9
10
函数结束
--- PASS: TestGoroutineStatement (0.00s)
测试goroutine 0
测试goroutine 1
测试goroutine 2
测试goroutine 3
测试goroutine 4
测试goroutine 5
测试goroutine 6
测试goroutine 7
测试goroutine 8
测试goroutine 9
测试goroutine 10
PASS
ok      gonotes/goroutine   0.285s
*/

```

## Goroutine 是如何执行的

与函数不同的是 goroutine 调⽤之后会⽴即返回,不会等待 goroutine 的执⾏结果.所以 goroutine 不会接收返回值. 把封装 main 函数的 goroutine 叫做主 goroutine,main 函数作为主 goroutine 执⾏,如果 main 函数中 goroutine 终⽌了,程序也将终⽌.其他的 goroutine 都不会再执⾏.
从上面结果可以看出.main 函数并不会等待⼦ goroutine 执⾏结束.⼀个 goroutine 的执⾏速度是⾮常快的,并且是主 goroutine 和⼦ goroutine 进⾏资源竞争,谁抢到资源多,谁就先执⾏,main 函数是不会让着⼦ goroutine 的.

## runtime 包

go 是运⾏在 runtime 调度器上的,它主要负责内存管理、垃圾回收、栈处理等等.也包含了 Go 运⾏时系统交互的操作,控制 goroutine 的操作.Go 程序的调度器可以很合理的分配 CPU 资源给每⼀个任务.
Go1.5 版本之前默认是单核执⾏的,从 1.5 之后使⽤可以通过 runtime.GOMAXPROCS() 来设置让程序并发执⾏,提⾼ CPU 的利⽤率.

```go
package goroutine_test

import (
    "fmt"
    "runtime"
    "testing"
    "time"
)

func TestRuntime(t *testing.T) {
    //获取当前GOROOT⽬录
    fmt.Println("GOROOT:", runtime.GOROOT())
    //获取当前操作系统
    fmt.Println("操作系统:", runtime.GOOS)
    //获取当前逻辑CPU数量
    fmt.Println("逻辑CPU数量：", runtime.NumCPU())
    //设置最⼤的可同时使⽤的CPU核数 取逻辑cpu数量
    n := runtime.GOMAXPROCS(runtime.NumCPU())
    fmt.Println(n) //⼀般在使⽤之前就将cpu数量设置好 所以最好放在init函数内执⾏
    //goexit 终⽌当前goroutine //创建⼀个goroutine
    go func() {
        fmt.Println("start...")
        defer func() {
            fmt.Println("defer end")
        }()
        runtime.Goexit()      //终⽌当前goroutine
        fmt.Println("end...") //不会执行
    }()
    time.Sleep(1 * time.Second) //主goroutine休眠1秒让⼦goroutine执⾏完
    fmt.Println("main_end...")
}

/*
=== RUN   TestRuntime
GOROOT: /usr/local/go
操作系统: darwin
逻辑CPU数量： 8
8
start...
defer end
main_end...
--- PASS: TestRuntime (1.00s)
PASS
ok      gonotes/goroutine   1.285s
*/

```

如果调⽤ runtime.Goexit()函数之后,会⽴即停⽌当前 goroutine.其他的 goroutine 不会受影响.并且当前 goroutine 如果有未执⾏的 defer 还是会执⾏完 defer 操作,需要注意的是不能将 runtime.goexit()放在主 goroutine 也就是 main 函数中执⾏,否则会发⽣运⾏时恐慌.

## Go 语⾔临界资源安全

> 并发环境中多个协程之间的共享资源,如果对临界资源处理不当.往往会导致数据不⼀致的情况.例如:多个 goroutine 在访问同⼀个数据资源的时候其中⼀个修改了数据,另⼀个 goroutine 在使⽤的时候就不对了.

```go
package goroutine_test

import (
    "fmt"
    "math/rand"
    "testing"
    "time"
)

func TestGoroutineResource(t *testing.T) {
    fmt.Println("临界资源安全")
    //开启4个协程抢粮⻝
    go Fafang("灾⺠1")
    go Fafang("灾⺠2")
    go Fafang("灾⺠3")
    go Fafang("灾⺠4")

    //让程序休息5秒等待所有⼦协程执⾏完毕
    time.Sleep(5 * time.Second)
}

//定义全局变量 表示救济粮⻝总量
var food = 10

//定义⼀个发放的⽅法
func Fafang(name string) {
    for {
        if food > 0 {
            //此时有可能第⼆个goroutine访问的时候 第⼀个goroutine还未执⾏完 所以条件也成⽴
            time.Sleep(time.Duration(rand.Intn(1000)) * time.Millisecond)
            //随机休眠时间
            food--
            fmt.Println(name, "抢到救济粮 ，还剩下", food, "个")
        } else {
            fmt.Println(name, "别抢了 没有粮⻝了。")
            break
        }
    }
}

/*
=== RUN   TestGoroutineResource
临界资源安全
灾⺠1 抢到救济粮 ，还剩下 9 个
灾⺠4 抢到救济粮 ，还剩下 8 个
灾⺠1 抢到救济粮 ，还剩下 7 个
灾⺠4 抢到救济粮 ，还剩下 6 个
灾⺠1 抢到救济粮 ，还剩下 5 个
灾⺠3 抢到救济粮 ，还剩下 4 个
灾⺠2 抢到救济粮 ，还剩下 3 个
灾⺠4 抢到救济粮 ，还剩下 2 个
灾⺠1 抢到救济粮 ，还剩下 1 个
灾⺠3 抢到救济粮 ，还剩下 0 个
灾⺠3 别抢了 没有粮⻝了。
灾⺠1 抢到救济粮 ，还剩下 -1 个
灾⺠1 别抢了 没有粮⻝了。
灾⺠4 抢到救济粮 ，还剩下 -2 个
灾⺠4 别抢了 没有粮⻝了。
灾⺠2 抢到救济粮 ，还剩下 -3 个
灾⺠2 别抢了 没有粮⻝了。
--- PASS: TestGoroutineResource (5.00s)
PASS
ok      gonotes/goroutine   5.468s

*/

```

上面代码出现负数的情况就是因为 Go 语⾔的并发⾛的太快了,当有⼀个协程进⼊执⾏的时候还没来得及取出数据,另外⼀ 个协程也进来了,所以会出现负数的情况.
那么如何解决这样的问题,我们不能⽤休眠的⽅法让程序等待,因为你并不知道程序会多久执⾏结束,到底应该让程序休眠多长时间.下⾯看看如何控制 goroutine 协程在执⾏过程中保证数据的安全.

### sync 同步包

sync 同步包:是 Go 语⾔提供的内置同步操作,保证数据统⼀的⼀些⽅法,`WaitGroup` 等待⼀个 goroutine 的集合执⾏完成,也叫同步等待组,使⽤`Add()`⽅法,来设置要等待⼀组 goroutine 要执⾏的数量.⽤ `Done()`⽅法来减去执⾏ goroutine 集合的数量.使⽤`Wait()`⽅法让 主 goroutine 也就是 main 函数进⼊阻塞状态,等待其他的⼦ goroutine 执⾏结束后.main 函数才会解除阻塞状态.

```go
package goroutine_test

import (
    "fmt"
    "sync"
    "testing"
)

//创建⼀个同步等待组的对象
var wg sync.WaitGroup

func TestSync(t *testing.T) {
    fmt.Println("sync包测试")
    wg.Add(3) //设置同步等待组的数量
    go Relief1()
    go Relief2()
    go Relief3()
    wg.Wait() //主goroutine进⼊阻塞状态
    fmt.Println("main end...")

}

func Relief1() {
    fmt.Println("func1...")
    wg.Done() //执⾏完成 同步等待数量减1
}
func Relief2() {
    defer wg.Done()
    fmt.Println("func2...")
}
func Relief3() {
    defer wg.Done() //推荐使⽤延时执⾏的⽅法来减去执⾏组的数量
    fmt.Println("func3...")
}

/*
=== RUN   TestSync
sync包测试
func3...
func2...
func1...
main end...
--- PASS: TestSync (0.00s)
PASS
ok      gonotes/goroutine   (cached)
*/

```

除了 sync 包外,go 还提供了两种锁类型`互斥锁`和`读写锁` 当⼀个协程在访问当前数据资源的时候,给当前资源加上锁,防⽌另外的协程访问.等待解锁后其他协程才能够访问.

### 互斥锁

互斥锁,当⼀个 goroutine 获得锁之后其他的就只能等待当前 goroutine 执⾏完成之后解锁后才能访问资源.对应的⽅法有上锁 `Lock()`和解锁`Unlock()`

```go
package goroutine_test

import (
    "fmt"
    "sync"
    "testing"
)

//定义全局变量 表示救济粮⻝总量
var food2 = 10

//同步等到组对象
var wg2 sync.WaitGroup

//创建⼀把锁
var mutex sync.Mutex

func TestMutex(t *testing.T) {
    fmt.Println("互斥锁")
    wg2.Add(4)
    // 开启4个携程抢粮食
    go Relief("A")
    go Relief("B")
    go Relief("C")
    go Relief("D")
    // 阻塞主协程，等待⼦协程执⾏结束
    wg2.Wait()
}

//定义⼀个发放的⽅法
func Relief(name string) {
    defer wg2.Done()
    for {
        //上锁
        mutex.Lock()
        if food2 > 0 {
            //加锁控制之后每次只允许⼀个协程进来，就会避免争抢
            food2--
            // time.Sleep(1 * time.Second)
            fmt.Println(name, "抢到救济粮 ，还剩下", food2, "个")
        } else {
            mutex.Unlock()
            //条件不满⾜也需要解锁 否则就会造成死锁其他不能执⾏
            fmt.Println(name, "别抢了 没有粮⻝了。")
            break
        }
        //执⾏结束解锁，让其他协程也能够进来执⾏
        mutex.Unlock()
    }
}

/*

=== RUN   TestMutex
互斥锁
D 抢到救济粮 ，还剩下 9 个
D 抢到救济粮 ，还剩下 8 个
D 抢到救济粮 ，还剩下 7 个
D 抢到救济粮 ，还剩下 6 个
D 抢到救济粮 ，还剩下 5 个
D 抢到救济粮 ，还剩下 4 个
D 抢到救济粮 ，还剩下 3 个
D 抢到救济粮 ，还剩下 2 个
D 抢到救济粮 ，还剩下 1 个
D 抢到救济粮 ，还剩下 0 个
D 别抢了 没有粮⻝了。
A 别抢了 没有粮⻝了。
B 别抢了 没有粮⻝了。
C 别抢了 没有粮⻝了。
--- PASS: TestMutex (0.00s)
PASS
ok      gonotes/goroutine   (cached)
*/

```

### 读写锁

`互斥锁`是⽤来控制多个协程在访问同⼀个资源的时候进⾏加锁控制,保证了数据安全,但同时也降低了性能,如果说多个 goroutine 同时访问⼀个数据只是读取⼀下数据,并没有对数据进⾏任何修改操作,那么不管多少个 goroutine 来读取都应该是可以的.主要问题在于修改,修改的数据就需要加锁操作,来保证数据在多个 goroutine 读取的时候统⼀. 读取和读取之间是不需要互斥操作的,所以我们⽤ `读写锁`专门针对读操作和写操作的互斥锁.

```go
package goroutine_test

import (
    "fmt"
    "sync"
    "testing"
    "time"
)

//创建⼀把读写锁 可以是他的指针类型
var rwmutex sync.RWMutex

var wg3 sync.WaitGroup

func TestReadWrite(t *testing.T) {
    fmt.Println("读写锁")
    wg3.Add(3)
    go Read(1)
    go Write(2)
    go Read(3)
    wg3.Wait()
    fmt.Println("======main结束======")
}

func Read(i int) {
    defer wg3.Done()
    fmt.Println("准备读取数据")
    // 读上锁
    rwmutex.RLock()
    fmt.Println("正在读取..", i)
    rwmutex.RUnlock() //读取操作解锁
    fmt.Println("======读取结束======")

}

func Write(i int) {
    defer wg3.Done()
    fmt.Println("======开始读写数据======")
    rwmutex.Lock() //写操作上锁
    fmt.Println("======正写数据...", i)
    time.Sleep(3 * time.Second)
    rwmutex.Unlock() //写操作解锁
    fmt.Println("======写操作结束======")
}

/*
=== RUN   TestReadWrite
读写锁
准备读取数据
正在读取.. 3
======读取结束======
准备读取数据
正在读取.. 1
======读取结束======
======开始读写数据======
======正写数据... 2
======写操作结束======
======main结束======
--- PASS: TestReadWrite (3.00s)
PASS
ok      gonotes/goroutine   3.331s

*/

```

与`普通的互斥锁`的区别在于他能分别针对读操作和写操作进⾏锁定和解锁.`读写锁`的控制规则是,他允许任意多个读操作同时进⾏,但是只允许⼀个写操作进⾏,并且在`某⼀个写操作的时候不允许读操作进⾏`.

### channel 通道

channel 通道是⽤来实现多个协程 Goroutines 之间的通讯的，通道相当于⼀个管道,管道⾥⾯放的是数据,管道⼀头放则另⼀头 取.
Go 语⾔虽然提供了传统的同步机制,但是 Go 语⾔强烈建议还是使⽤通道来实现 Goroutines 之间的通讯.
Go 语⾔强调`不要通过共享内存来通信，⽽应该通过通信来共享内存`
当存在多个 goroutine 要传递某⼀个数据时,可以把这个数据封装成⼀个对象,然后把对象的指针传⼊ channel 通道中,另⼀个 goroutine 从通道中读取这个指针.同⼀时间只允许⼀个 goroutine 访问 channel 通道⾥⾯的数据,所以 go 就是把数据放在了通道中 来传递,⽽不是共享内存来传递.
每个通道都有与其相关的类型,该类型表⽰通道中允许传递的数据类型,通道作为⼀种数据类型也有⾃⼰的默认值`零值为nil`, 通 道必须使⽤类似于切⽚的⽅法`make()`来定义声明通道.

#### channel 的定义

```go
package channel_test

import (
    "fmt"
    "testing"
)

var channel1 chan int

func TestChanelStatement(t *testing.T) {
    fmt.Println("通道的定义")
    fmt.Printf("通道的数据类型:%T,通道的值:%v\n", channel1, channel1)
    if channel1 == nil {
        channel1 = make(chan int)
        fmt.Printf("通过make创建的通道数据类型:%T,通道的值:%v,\n", channel1, channel1)
    }
}
/*
=== RUN   TestChanelStatement
通道的定义
通道的数据类型:chan int,通道的值:<nil>
通过make创建的通道数据类型:chan int,通道的值:0xc0000244e0,
--- PASS: TestChanelStatement (0.00s)
PASS
ok      gonotes/channel 0.394s
*/
```

#### 通道的使用

不管是发送数据还是获取数据,他们都是阻塞的,当⼀个`goroutine`向另⼀个`goroutine`发送数据的时候,他就是阻塞的,直到有另外⼀个 goroutine 来取数据,则解除阻塞.相反的`读取数据也是阻塞的`,直到另⼀个 goroutine 向他来写数据来解除阻塞.channel 本⾝就是同步的.也就是同⼀时间只允许⼀条 goroutine 来操作.要使⽤通道最少有两个 goroutine 来操作.⼀个 goroutine 是⽤不到 channel 的.

```go
package channel_test

import (
    "fmt"
    "testing"
)

func TestChannelUse(t *testing.T) {
    fmt.Println("通道的使用")
    ch1 := make(chan int)

    go func() {

        fmt.Println("======⼦协程执⾏======")
        data := <-ch1 //从通道中读取数据
        fmt.Println("读取到通道中的数据是:", data)
    }()

    ch1 <- 10 //往通道⾥放数据

    fmt.Println("======主协程结束======")
}

/*
=== RUN   TestChannelUse
通道的使用
======⼦协程执⾏======
读取到通道中的数据是: 10
======主协程结束======
--- PASS: TestChannelUse (0.00s)
PASS
ok      gonotes/channel 0.286s
*/

```

#### 通道的关闭

当发送者或者接收者把数据发⽣完毕,发送者可以关闭通道,通知接收⽅不会再有数据发送到 channel 上了然后发送⽅调`close()`⽅法关闭通道.接收者可以获取来⾃通道数据时候额外的变量,来检测通道是否已经关闭.

```go
package channel_test

import (
    "fmt"
    "testing"
)

func TestChannelClose(t *testing.T) {
    fmt.Println("这是通道的关闭测试案例")
    //创建⼀个通道⽤来传递数据
    ch2 := make(chan int)
    //通过⼦协程往通道中放数据
    go func() {
        fmt.Println("======放数据的⼦协程执⾏======")
        for i := 0; i < 10; i++ {
            ch2 <- i //往通道中放数据
        }
        close(ch2) //关闭通道
    }()
    //主协程通过for循环来获取通道中的所有数据
    for {
        v, ok := <-ch2 //获取通道的状态以及数据
        if !ok {
            fmt.Println("⼦协程已将通道关闭")
            break
        }
        fmt.Println("获取到的⼦协程数据为", v)
    }
    fmt.Println("主协程结束")
}

/*

=== RUN   TestChannelClose
这是通道的关闭测试案例
======放数据的⼦协程执⾏======
获取到的⼦协程数据为 0
获取到的⼦协程数据为 1
获取到的⼦协程数据为 2
获取到的⼦协程数据为 3
获取到的⼦协程数据为 4
获取到的⼦协程数据为 5
获取到的⼦协程数据为 6
获取到的⼦协程数据为 7
获取到的⼦协程数据为 8
获取到的⼦协程数据为 9
⼦协程已将通道关闭
主协程结束
--- PASS: TestChannelClose (0.00s)
PASS
ok      gonotes/channel (cached)

*/

```

#### 缓冲通道

上面说的 channel 通道都是非缓冲通道,每⼀次发送和接收都是阻塞式的.⼀个发送操作对应⼀个接收操作,如果发送后未接收就是阻塞的.同样对于接收者来说另⼀个发送之前它也是阻塞的.缓冲通道指的是有⼀个缓冲区,对于发送数据是将数据发送到缓冲区,当缓冲区满了之后才会被阻塞.

```go
package channel_test

import (
    "fmt"
    "testing"
)

func TestChannelCache(t *testing.T) {
    fmt.Println("缓冲通道测试案例")
    //定义⼀个缓冲区⼤⼩为5的通道
    ch3 := make(chan int, 5)
    //开启⼦协程写⼊数据
    go func() {
        for i := 0; i < 10; i++ {
            ch3 <- i
            fmt.Println("⼦协程写⼊数据：", i)
        }
        close(ch3) //关闭通道
    }()
    //主协程读取数据
    for {
        v, ok := <-ch3
        if !ok {
            fmt.Println("读取结束", ok)
            break
        }
        fmt.Println("主协程读取到的数据为：", v)
    }
    fmt.Println("主协程结束")
}
/*
=== RUN   TestChannelCache
缓冲通道测试案例
⼦协程写⼊数据： 0
⼦协程写⼊数据： 1
⼦协程写⼊数据： 2
⼦协程写⼊数据： 3
⼦协程写⼊数据： 4
⼦协程写⼊数据： 5
主协程读取到的数据为： 0
主协程读取到的数据为： 1
主协程读取到的数据为： 2
主协程读取到的数据为： 3
主协程读取到的数据为： 4
主协程读取到的数据为： 5
主协程读取到的数据为： 6
⼦协程写⼊数据： 6
⼦协程写⼊数据： 7
⼦协程写⼊数据： 8
⼦协程写⼊数据： 9
主协程读取到的数据为： 7
主协程读取到的数据为： 8
主协程读取到的数据为： 9
读取结束 false
主协程结束
--- PASS: TestChannelCache (0.00s)
PASS
ok      gonotes/channel (cached)
*/

```

#### 定向通道

之前的通道都是双向通道,可以同时通过⼦ goroutine 向通道中发送数据和接收数据.或者从主 goroutine 中发送或者接收数据. ⽽定向通道表⽰:要么是`只读通道`,要么是`只写通道`

```go
package channel_test

import (
    "fmt"
    "testing"
)

func TestReadWrite(t *testing.T) {
    fmt.Println("读写通道")

    // 双向通道可读可写
    ch4 := make(chan int)
    // 单向通道只能写不能读
    ch5 := make(chan<- int)
    // 单向通道只能读不能写
    ch6 := make(<-chan int)

    //如果创建时候创建的就是双向通道
    //则在⼦协程内部写⼊数据，读取的时候不受影响。
    go WriteOnly(ch4)
    data1 := <-ch4
    fmt.Println("获取到只写通道中的数据是", data1)

    //如果将定向通道ch5只写通道，作为参数传递。
    //则不能读取到写回来的数据。
    go WriteOnly(ch5)
    // data2 := <-ch5 //不能读取会报错：invalid operation: <-ch5 (receive from send-only type chan<- int)

    go ReadOnly(ch6)

}

//只读
func ReadOnly(ch <-chan int) {
    data := <-ch
    fmt.Println("读取到通道的数据是：", data)
}

//只写
func WriteOnly(ch chan<- int) {
    //如果传进来的原本是双向通道
    //但是函数本身接收的是⼀个只写的通道，则在此函数内部只允许写⼊数据不允许读取数据
    //所以单向通道往往是作为参数传递
    ch <- 10
    fmt.Println("只写通道结束")
}

```
