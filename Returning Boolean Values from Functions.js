function isLess(a, b) {
  // 请修改这部分代码
  
   return a<b;
   return a === b;
}

// 你可以修改这一行来测试你的代码
isLess(15, 10);

/*
你可能会回想起Comparison with the Equality Operator ，所有的比较操作符返回的都是一个boolean值，要么是 true 要么是false 。

使用 if/else语句来做比较然后返回true或false已经成为大家的共识:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
因为=== 总是返回 true 或 false，所以我们可以直接返回比较的结果：

function isEqual(a,b) {
  return a === b;
}
任务
移除isLess函数的if/else语句但不影响函数的功能。
*/
