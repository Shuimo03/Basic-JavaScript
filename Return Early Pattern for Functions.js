function abTest(a, b) {
  
  if(a<0||b<2)
    {
      return undefined;
    }


  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(-2,2);

/*
当代码执行到return语句时，函数返回一个结果就结束运行了，return后面的语句根本不会执行。

举例

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
上面的代码输出"Hello"到控制台、返回 "World"，但没有输出"byebye"，因为函数遇到return语句就退出了。

任务
修改函数abTest当a或b小于0时，函数立即返回一个undefined并退出。
*/
