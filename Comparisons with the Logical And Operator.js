function myTest(val) {
  // 请只修改这条注释以下的代码

  if(val<=50&&val>=25){
    return "Yes";
  }

  // 请只修改这条注释以上的代码
  return "No";
}

// 你可以修改这一行来测试你的代码
myTest(50);

-------------------------------------------------------------------------------------------------------------------------------------------

/*
有时你需要在一次判断中做多个操作。当且仅当运算符的左边和右边都是 true，逻辑与 运算符（&&）才会返回 true。

同样的效果可以通过if语句的嵌套来实现：

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
只有当 num 的值在6和9之间（包括6和9）才会返回 "Yes"。相同的逻辑可被写为：

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
任务
结合两个if语句为一个语句，如果 val 小于或等于 50 并且大于或等于 25，返回 "Yes"。否则，将返回 "No"。


*/