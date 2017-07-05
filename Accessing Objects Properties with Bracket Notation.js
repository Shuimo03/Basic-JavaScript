var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];   
var drinkValue = testObj["the drink"];    


/*
第二种访问对象的方式就是中括号操作符([])，如果你想访问的属性的名称有一个空格，这时你只能使用中括号操作符([])。

这是一个使用中括号操作符([])读取对象属性的例子：

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
提示：属性名称中如果有空格，必须把属性名称用单引号或双引号包裹起来。

任务
用中括号操作符读取对象testObj的属性"an entree"值和属性"the drink"值。
*/
