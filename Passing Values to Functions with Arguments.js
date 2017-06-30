function myFunction(a,b){
  console.log(a+b);
}
myFunction(1,2);
myFunction(7,9);

/*
函数的参数parameters在函数中充当占位符(也叫形参)的作用，参数可以为一个或多个。调用一个函数时所传入的参数为实参，实参决定着形参真正的值。简单理解：形参即形式、实参即内容。

这是带有两个参数的函数， param1 和 param2：

function testFun(param1, param2) {
  console.log(param1, param2);
}
接着我们调用 testFun：

testFun("Hello", "World");

我们传递了两个参数， "Hello" 和 "World"。在函数内部，param1 等于“Hello”，param2 等于“World”。请注意，testFun 函数可以多次调用，每次调用时传递的参数会决定形参的实际值。

任务
创建一个名为 myFunction 的函数，它可以接收两个参数，计算参数的和，将结果输出到控制台。
调用这个函数。
Run tests (ctrl + enter)

*/
