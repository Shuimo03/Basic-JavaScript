function myFunction() {
  // 请把你的代码写在这条注释以下
  var outNew = "sweater";
  var outerWear = "sweater";
  return outNew;
  
  // 请把你的代码写在这条注释以上
  return outerWear;
}


/*
一个程序中有可能具有相同名称的 局部变量和全局变量。在这种情况下，局部变量将会优先于全局变量。

下面为例：

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
函数 myFun 将会返回 "Head"，因为 局部变量 优先级更高。

任务
给 myFunction 添加一个局部变量来覆盖 outerWear 的值为 "sweater"。
*/
