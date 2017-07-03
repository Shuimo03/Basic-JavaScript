function myFunction(wasThatTrue) {

  // 请把你的代码写在这条注释以下
  if(wasThatTrue){
    return  "That was true";
  }
  return "That was false";

}

// 你可以修改这一行来测试你的代码
myFunction(false);


/*
If 语句用于在代码中做条件判断。关键字 if 告诉 JavaScript 在小括号中的条件为真的情况下去执行定义在大括号里面的代码。这种条件被称为 Boolean 条件，因为他们只可能是 true（真）或 false（假）。

当条件的计算结果为 true，程序执行大括号内的语句。当布尔条件的计算结果为 false，大括号内的代码将不会执行。

伪代码

if(条件为真){
  语句被执行
}
示例

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // 返回 "It was true"
test(false); // 返回 "It was false"
当 test 被调用，并且传递进来的参数值为 true，if 语句会计算 myCondition 的结果，看它是真还是假。如果条件为 true，函数会返回 "It was true"。当 test 被调用，并且传递进来的参数值为 false，myCondition 不 为 true，并且不执行大括号后面的语句，函数返回 "It was false"。

任务
在函数内部创建一个 if 语句，如果该参数 wasThatTrue 值为 true，返回 "That was true"，否则，并返回 "That was false"。
*/
