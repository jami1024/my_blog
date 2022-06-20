# 切片

切片是长度可变的数组(具有相同数据类型的数据项组成的一组长度可变的序列) ,切片由三部分组成:

1. 指针:指向切片第一个元素指向的数组元素的地址
2. 长度:切片元素的数量
3. 容量:切片开始到结束位置元素的数量

## 声明

切片声明需要指定组成元素的类型, 但不需要指定存储元素的数量 (长度) 。 在切片声明后, 会被初始化为 nil,表示暂不存在的切片

```go
package slice

import (
	"fmt"
	"testing"
)


func TestSliceStatement(t *testing.T) {

	fmt.Println("切片的声明")
	var names []string = []string{"a", "b", "c"}
	fmt.Printf("names类型:%T,names的值为:%q\n", names, names)

	var namesNil []string // nil切片
	var namesBlank []string = []string{} //空切片
	fmt.Printf("namesNil:%t\nnamesBlank:%t\n", namesNil == nil, namesBlank == nil)


	// 利用make创建切片
	// make(type, len, cap)
	nameMake := make([]string, 3, 10)
	fmt.Printf("nameMake类型:%T\tnameMake的值为:%q\nnameMake的len:%d\tnameMake的cap:%d\n", nameMake, nameMake, len(nameMake), cap(nameMake))

	// 访问和修改
	fmt.Println("切片的访问")
	fmt.Printf("names第一个元素是:%v\n", names[0])
	fmt.Println("切片的修改")
	names[0] = "0"
	fmt.Printf("names:%q\n", names)

	// 长度,切片中已经存在的元素 len
	fmt.Printf("names的长度:%d\n", len(names))

	name3 := nameMake
	name3 = append(name3, "a") // ["", "", "", "aa"]
	nameMake = append(nameMake, "aa") // ["", "", "", "aa"]
	// 变量赋值都是复制
	fmt.Printf("nameMake的值为:%q\nname3的值%q\n", nameMake, name3)
	// 0 <= start <= end <= cap
	// len = end - start
	// cap = cap - start

	// 0 <= start <= end <= cap_end <= cap
	// len = end -start
	// cap = cap_end = start
	fmt.Println(nameMake[1:3:5])

	/*

	=== RUN TestSliceStatement

	切片的声明

	names类型:[]string,names的值为:["a" "b" "c"]

	namesNil:true

	namesBlank:false

	nameMake类型:[]string nameMake的值为:["" "" ""]

	nameMake的len:3 nameMake的cap:10

	切片的访问

	names第一个元素是:a

	切片的修改

	names:["0" "b" "c"]

	names的长度:3

	nameMake的值为:["" "" "" "aa"]

	name3的值["" "" "" "aa"]

	[ ]

	--- PASS: TestSliceStatement (0.00s)

	PASS

	ok gonotes/slice 3.044s

	*/
}
```

## 遍历

可通过 for-len 或 for-range 方式对切片中元素进行遍历

### 例子

```go
package slice


import (
	"fmt"
	"testing"
)



// 定义切片
var names []string = []string{"a", "b", "c"}

func TestSliceForLen(t *testing.T) {
	fmt.Println("for len方式遍历切片")
	for i := 0; i < len(names); i++ {
		fmt.Printf("names的索引:%d\t值为%s\n", i, names[i])
	}
	/*
		=== RUN TestSliceForLen
		for len方式遍历切片
		names的索引:0 值为a
		names的索引:1 值为b
		names的索引:2 值为c
		--- PASS: TestSliceForLen (0.00s)
		PASS
		ok gonotes/slice 0.115s
	*/
}



func TestSliceForRange(t *testing.T) {
	fmt.Println("for range方式遍历切片")
	for i := range names {
		fmt.Printf("names的索引:%d\t值为%s\n", i, names[i])
	}


	/*

	=== RUN TestSliceForRange
	for range方式遍历切片
	names的索引:0 值为a
	names的索引:1 值为b
	names的索引:2 值为c
	--- PASS: TestSliceForRange (0.00s)
	PASS
	ok gonotes/slice 0.111s
	*/

}
```

## 例子 1

```go
package slice

import (
	"fmt"
	"testing"
)


func TestSliceAppend(t *testing.T) {
	// append新增
	// 定义切片,注意:=这种方式不能定义全局变量
	names := []string{"a", "b", "c"}
	fmt.Printf("names:%q\n", names)
	names = append(names, "d")
	fmt.Printf("names:%q\n", names)


	/*
	=== RUN TestSliceAppend
	names:["a" "b" "c"]
	names:["a" "b" "c" "d"]
	--- PASS: TestSliceAppend (0.00s)
	PASS
	ok gonotes/slice 0.296s
	*/

}
```

## 例子 2

```go
package slice


import (
	"fmt"
	"testing"
)


func TestSliceCap(t *testing.T) {

	//cap 切片的容量，表示内存中可以存放的大小,当没有指定cap大小时，默认和长度相同
	nums := []int{1, 2, 3, 4, 5, 6}
	fmt.Printf("nums的len:%d\tnums的cap:%d\n", len(nums), cap(nums))
	nums = append(nums, 7)
	// cap满时，当增加的元素小于1024，容量就会成倍增加，若大于1024则增加0.25倍
	fmt.Printf("nums的len:%d\tnums的cap:%d\n", len(nums), cap(nums))
	nums2 := nums[1:3]
	fmt.Printf("nums2的len:%d\tnums2的值:%v\n", len(nums2), nums2)
	// 修改nums2的值nums中也会变
	nums2[0] = 100
	fmt.Printf("nums2的值:%v\tnums的值:%v\n", nums2, nums)

	/*
	=== RUN TestSliceCap
	nums的len:6 nums的cap:6
	nums的len:7 nums的cap:12
	nums2的len:2 nums2的值:[2 3]
	nums2的值:[100 3] nums的值:[1 100 3 4 5 6 7]
	--- PASS: TestSliceCap (0.00s)
	PASS
	ok gonotes/slice 0.241s
	*/
}
```

## 例子 3

```go
package slice

import (
	"fmt"
	"testing"
)


func TestSliceCopy(t *testing.T) {
	fmt.Println("切片的copy")
	n1 := []int{0, 1, 2, 3, 4, 5}
	n2 := []int{10, 11, 12, 13, 14, 15, 16}

	//copy(dst, src) src => dst,如果源比目标多，那么多出来的值并不会copy到目标中
	copy(n1, n2)
	fmt.Printf("n1 copy n2 后的结果%v\n", n1)

	/*
	=== RUN TestSliceCopy
	切片的copy
	n1 copy n2 后的结果[10 11 12 13 14 15]
	--- PASS: TestSliceCopy (0.00s)
	PASS
	ok gonotes/slice (cached)
	*/
}
```
