var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
return (myObj.hasOwnProperty(checkProp) ? myObj[checkProp] : "Not Found");
}

// Test your code by modifying these value
checkObj("gift");

/*
有时检查一个对象属性是否存在是非常有用的，我们可以用.hasOwnProperty(propname)方法来检查对象是否有该属性。如果有返回true，反之返回 false。

举例

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
任务
修改函数checkObj检查myObj是否有checkProp属性，如果属性存在，返回属性对应的值，如果不存在，返回 "Not Found"。

注意：如果你需要通过变量来访问对象的属性值，请用中括号操作符，点操作符不支持变量。
*/
