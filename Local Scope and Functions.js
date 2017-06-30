function myFunction() {
  'use strict';
  var myVar = "fff";
  
  console.log(myVar);
}
myFunction();

/*
在一个函数内声明的变量，以及该函数的参数都是局部变量，意味着它们只在该函数内可见。

这是在函数 myTest内声明局部变量loc 的最佳例子：

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // "foo"
console.log(loc); // "undefined"
在函数外，loc 是未定义的。

任务
在函数 myFunction 内部声明一个局部变量 myVar，并删除外部console.log。
*/
