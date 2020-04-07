/*@flow*/

var arr: Array<number> = [1, 2, 3]

arr.push('Hello');

// 数组类型注释的格式是 Array<T>，T 表示数组中每项的数据类型。在上述代码中，arr 是每项均为数字的数组。如果我们给这个数组添加了一个字符串，Flow 能检查出错误。