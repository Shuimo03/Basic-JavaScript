function myTest(val) {
  var answer = "";
  // 请只修改这条注释以下的代码
  switch(val)
    {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
        
    }
  
  // 请只修改这条注释以上的代码
  return answer;  
}

// 你可以修改这一行来测试你的代码
myTest(7);

/*
如果你有多个选项需要选择，switch 语句写起来会比多个串联的if/if else语句容易些，譬如:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
可以被下面替代：

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
任务
把串联的 if/if else 语句改成 switch 语句。

Run tests (ctrl + enter)

*/
