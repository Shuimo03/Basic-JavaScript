// 初始化变量
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// 请只修改这条注释以下的代码

var playerNumber = 16;       // 修改这一行
var player = testObj[playerNumber];  // 修改这一行


/*
中括号操作符的另一个使用方式是用变量来访问一个属性。当你需要遍历对象的属性列表或查表时，这种方式极为有用。

这有一个使用变量来访问属性的例子：

var someProp = "propName";
var myObj = {
  propName: "Some Value"
}
myObj[someProp]; // "Some Value"
还有更多：

var myDog = "Hunter";
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
}
var breed = dogs[myDog]; 
console.log(breed)// "Doberman"
提示：当我们通过变量名访问属性的时候，不需要给变量名包裹引号。因为实际上我们使用的是变量的值，而不是变量的名称。

任务
使用变量 playerNumber，通过中括号操作符找到 testObj 中 playerNumber 为 16 的值。
*/
