function multiplyAll(arr) {
  var product = 1;
  for(var i = 0;i<arr.length;i++){
    for(var j = 0;j<arr[i].length;j++){
      product = product*arr[i][j];
    }
  }
  return product;
}

// 你可以修改这一行来测试你的代码
multiplyAll([[1,2],[3,4],[5,6,7]]);

/*
如果你有一个二维数组，可以使用相同的逻辑，先遍历外面的数组，再遍历里面的子数组。下面是一个例子：

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
一次输出 arr 中的每个子元素。提示，对于内部循环，我们可以通过 arr[i] 的 .length 来获得子数组的长度，因为 arr[i] 的本身就是一个数组。

任务
修改函数 multiplyAll，获得 arr 内部数组的每个数字相乘的结果 product
*/
