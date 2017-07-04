function myTest(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  else
  {
     return "Between 5 and 10";
  }
  
 
}

myTest(7);

/*
如果你有多个条件语句，你可以通过else if语句把 if语句链起来。

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
任务
使用else if实现同样的效果。

*/
