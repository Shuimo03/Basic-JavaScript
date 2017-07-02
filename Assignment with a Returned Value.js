var processed = 0;

function process(num) {
  return (num + 3) / 5;
}

processed = process(7);

/*
赋值之前，先完成等号右边的操作。这意味着我们可把一个函数的返回值，赋值给一个变量。

假设我们预先定义的函数 sum 其功能就是将两个数字相加，那么：

ourSum = sum(5, 12);

将调用 sum 函数，返回return了一个数值 17，然后把它赋值给了 ourSum 变量。

任务
调用 process 函数并给参数一个值 7，然后把返回的值赋值给变量 processed。
*/
