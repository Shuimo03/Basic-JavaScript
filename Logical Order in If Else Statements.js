function myTest(val) {
  if (val < 5) {
    return  "Less than 5";
  } else if (val < 10) {
    return  "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// 你可以修改这一行来测试你的代码
myTest(4);


/*
在条件判断语句中，代码的执行顺序是从上到下，所以你需要考虑清楚先执行哪一句，后执行哪一句。

这有两个例子。

第一个例子：

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
第二个例子更改了代码的执行顺序：

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
*/
