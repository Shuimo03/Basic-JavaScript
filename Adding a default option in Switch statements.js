function myTest(val) {
  var answer = "";
  // 请把你的代码写在这条注释以下
  switch(val)
    {
      case "a":
        answer ="apple";
        break;
      case "b":
        answer ="bird";
        break;
      case "c":
        answer="cat";
        break;
      default:
        answer = "stuff";
    }
  
  
  // 请把你的代码写在这条注释以上
  return answer;  
}

// 你可以修改这一行来测试你的代码
myTest("a");

/*
在switch 语句中你可能无法用case来指定所有情况，这时你可以添加default语句。当再也找不到case匹配的时候default语句会执行，非常类似于if/else组合中的else语句。

default语句应该是最后一个case。

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
}
任务
写一个根据下面的条件来设置answer的switch语句：
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"
*/
