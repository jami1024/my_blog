# 数组

数组是具有相同数据类型的数据项组成的一组长度固定的序列, 数组的长度必须是非负整数的常量,长度也是类型的一部分.

## 声明

数组声明需要指定组成元素的类型以及存储元素的数量(长度) 。在数组声明后,其长度不可修改,数组的每个元素会根据对应类型的零值对进行初始化

```go
package array

import (
	"fmt"
	"testing"
)

func TestArrayStatement(t *testing.T) {

	fmt.Println("数组的声明")
	var names [3]string = [3]string{"zhangsan1", "zhangsan2"}
	var nums [5]int
	fmt.Printf("names类型%T,\tnums类型%T\n", names, nums)
	fmt.Println(names, nums)

	/*
		=== RUN TestArrayStatement

		数组的声明

		names类型[3]string, nums类型[5]int

		[zhangsan1 zhangsan2 ] [0 0 0 0 0]

		--- PASS: TestArrayStatement (0.00s)

		PASS ok gonotes/array 0.485s
	*/
}
```

## 遍历

可通过 for-len 或 for-range 方式对数组中元素进行遍历

### for+len 例子

```go
package array


import (
	"fmt"
	"testing"
)


func TestArrayForLen(t *testing.T) {

	fmt.Println("利用for len方式进行对数组的遍历")

	var names [3]string = [3]string{"zhangsan1", "zhangsan2", "zhangsan3"}

	for i := 0; i < len(names); i++ {
		fmt.Printf("索引：%d, 内容：%s\n", i, names[i])
		fmt.Printf("索引：%d, 内容：%q\n", i, names[i])
		// %s 和 %q的区别：如果是字符串，%q会把值用双引号扩起来
	}

	/*

	=== RUN TestArrayForLen

	利用for len方式进行对数组的遍历
	索引：0, 内容：zhangsan1
	索引：0, 内容："zhangsan1"
	索引：1, 内容：zhangsan2
	索引：1, 内容："zhangsan2"
	索引：2, 内容：zhangsan3
	索引：2, 内容："zhangsan3"

	--- PASS: TestArrayForLen (0.00s)
	PASS
	ok gonotes/array 0.475s
	*/
}
```
