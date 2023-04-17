#golang #map

# map
> map是go语⾔中的内置的字典类型，他存储的是⼀个键值对 key:value 类型的数据。

## 特点
-  map是⽆序的、长度不固定、不能通过下标获取，只能通过key来访问。 
- map的长度不固定 ，也是⼀种引⽤类型。可以通过内置函数 len(map)来获取map长度。 创建map的时候也是通过make函数创建。 
- map的key不能重复，如果重复新增加的会覆盖原来的key的值。

## 声明
```go
package map_test

import (
	"fmt"
	"testing"
)

func TestMapStatement(t *testing.T) {

	fmt.Println("map的声明")	
	// 1 var 变量名称 map[key的数据类型]value的数据类型 默认值是nil	
	var m1 map[string]int
	
	// 2 使⽤make声明 make(map[key_data_type]value_data_type)	
	var m2 = make(map[string]int)
	
	//3,直接声明并初始化赋值map⽅法	
	m3 := map[string]int{"张三": 89, "李四": 23, "王二": 90} // map[] map[] map[张三:89 李四:23 王二:90]
	
	fmt.Println(m1, m2, m3)
	fmt.Println(m1 == nil) //true	
	fmt.Println(m2 == nil) //false	
	fmt.Println(m3 == nil) //false

}
```
## 操作
> map 是引⽤类型的，如果声明没有初始化值，默认是nil。空的切⽚是可以直接使⽤的，因为它有对应的底层数组,空的map不 能直接使⽤。需要先make之后才能使⽤。

```go
package map_test

import (
    "fmt"
    "testing"
)

func TestMapOperate(t *testing.T) {
    fmt.Println("map的使用")
    var m1 map[int]string         //只是声明 nil
    var m2 = make(map[int]string) //创建
    m3 := map[string]int{"张三": 89, "李四": 23, "王二": 90}

    fmt.Println(m1, m2, m3) // map[] map[] map[张三:89 李四:23 王二:90]

    //map 为nil的时候不能使⽤ 所以m1操作之前要初始化值
    m1 = make(map[int]string)

    //1存储键值对到map中 语法:map[key]=value
    m1[1] = "狗"
    m1[2] = "猫"
    m1[0] = "鸡"

    //2获取map中的键值对 语法:map[key]
    val := m1[2]
    fmt.Println(val) // 猫

    //3判断key是否存在 语法：value,ok:=map[key]
    val, ok := m1[1]
    fmt.Println(val, ok) //结果返回两个值，⼀个是当前获取的key对应的val值。⼆是当前值否存在，会返回⼀个true或false。

    //4修改map如果不存在则添加， 如果存在直接修改原有数据。
    m1[1] = "⼩狗狗"
    fmt.Println(m1) //map[0:鸡 1:⼩狗狗 2:猫]

    //5删除map中key对应的键值对数据 语法: delete(map, key)
    delete(m1, 1)
    fmt.Println(m1) //map[0:鸡 2:猫]

    //6 获取map中的总⻓度 len(map)
    fmt.Println(len(m1)) //2

    //7 map和切片的配合使用
    s1 := make([]map[string]string, 0, 2)
    map1 := make(map[string]string)
    map1["name"] = "zhangsan"
    map1["age"] = "18"

    map2 := make(map[string]string)
    map2["name"] = "lisi"
    map2["age"] = "20"

    s1 = append(s1, map1, map2)

    fmt.Println(s1) // [map[age:18 name:zhangsan] map[age:20 name:lisi]]

    for key, val := range s1 {
        fmt.Println(key, val)
        // 0 map[age:18 name:zhangsan]
        // 1 map[age:20 name:lisi]
    }
}


```

## 遍历

```go
package map_test

import (
    "fmt"
    "testing"
)

func TestMapRange(t *testing.T) {
    fmt.Println("map的遍历")
    map1 := make(map[int]string)
    map1[1] = "a"
    map1[2] = "b"
    map1[3] = "c"
    map1[4] = "d"

    //遍历map
    for key, val := range map1 {
        fmt.Println(key, val)
    }
    /*
        map的遍历
        3 c
        4 d
        1 a
        2 b
    */
}

```