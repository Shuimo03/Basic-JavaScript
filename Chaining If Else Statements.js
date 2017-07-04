function myTest(num) {

  if(num<5)
  {
    return "Tiny";
  }
  else if(num<10)
    {
      return "Small";
    }
  else if(num<15)
    {
      return "Medium";
    }
  else if(num<20)
    {
      return "Large";
    }
  else if(num>=20)
    {
      return "Huge";
    }

}

myTest(7);

/*
if/else 语句串联在一起可以实现复杂的逻辑，这是多个if/else if 语句串联在一起的伪代码：

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
任务
把if/else if语句串联起来实现下面的逻辑：

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/
