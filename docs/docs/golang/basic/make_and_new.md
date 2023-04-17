#golang #make和new的区别


# make()和new()的区别
make()是Go语⾔中的内置函数，主要⽤于创建并初始化slice切⽚类型，或者map字典类型，或者channel通道类型数据。他与 new⽅法的区别是。new⽤于各种数据类型的内存分配，在Go语⾔中认为他返回的是⼀个指针。指向的是⼀个某种类型的零值。make 返回的是⼀个有着初始值的⾮零值。

```go
//测试使⽤new⽅法新建切⽚
slice1 := new([]int) 
fmt.Println(slice1) //输出的是⼀个地址&[]

//使⽤make创建切⽚
slice2 := make([]int, 3) 
fmt.Println(slice2)//输出初始值都为0的数组， [0 0 0]

fmt.Println(slice1[0])//结果出错 slice1是⼀个空指针 invalid operation: slice1[0] (type *[]int does not support indexing)
fmt.Println(slice2[0])//结果为 0 因为已经初始化了
```