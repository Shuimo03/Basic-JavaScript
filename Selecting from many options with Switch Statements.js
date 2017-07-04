function myTest(val) {
  var answer = "";
  switch(val)
    {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }

  return answer;  
}
myTest(1);

/*
如果你有非常多的选项需要选择，可以使用switch语句。根据不同的参数值会匹配上不同的case分支，语句会从第一个匹配的case分支开始执行，直到碰到break就结束。

这是一个伪代码案例：

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
测试case 值使用严格相等运算符进行比较，break关键字告诉javascript停止执行语句。如果没有break关键字，下一个语句会继续执行。

任务
写一个测试 val的switch语句，并且根据下面的条件来设置不同的answer：
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
