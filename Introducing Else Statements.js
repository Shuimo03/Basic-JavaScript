function myTest(val) {
  var result = "";
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  else{
    result = "5 or Smaller";
  }
  
  return result;
}

myTest(4);


/*
当if语句的条件为真，大括号里的代码执行，那如果条件为假呢？

正常情况下什么也不会发生。

写一个else语句，当条件为假时执行相应的代码。

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
任务
结合多个if语句为一个if/else语句

*/
