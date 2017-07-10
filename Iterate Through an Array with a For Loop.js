var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i<myArr.length;i++){
  total += myArr[i];
}

/*
迭代输出一个数组的每个元素是 JavaScript 中的常见需求， for 循环可以做到这一点。

下面的代码将输出数组 arr 的每个元素到控制台：

var arr = [10,9,8,7,6];
for (var i=0; i < arr.length; i++) {
   console.log(arr[i]);
}
记住数组的索引从零开始的，这意味着数组的最后一个元素的下标是：数组的长度 - 1。我们这个循环的 条件 是 i < arr.length，当 i 的值为 长度-1 的时候循环就停止了。

任务
声明并初始化一个变量 total 为 0。使用 for 循环，使得 total 的值为 myArr 的数组中的每个元素的值的总和。
*/
