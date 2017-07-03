function myTest(val) {
  // 请只修改这条注释以下的代码

  if(val<10||val>20){
    return "Outside";
  }
  return "Inside";
}

// 你可以修改这一行来测试你的代码
myTest(10);

-------------------------------------------------------------------------------------------------------------------------------------------

如果任何一个操作数是true，逻辑或 运算符 (||) 返回 true。反之，返回 false。

举个例子：

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
只有当num大于等于5或小于等于10时，函数返回"Yes"。相同的逻辑可以简写成：

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
任务
结合两个if语句为一个语句，如果val不在10和20之间(包括10和20)，返回 "Outside"。反之，返回 "Inside"。
