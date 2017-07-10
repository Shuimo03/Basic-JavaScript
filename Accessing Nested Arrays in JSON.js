// 初始化变量
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// 请只修改这条注释以下的代码

var secondTree = myPlants[1].list[1]; 

/*
正如我们在前面的例子所见，JSON对象可以嵌套对象和数组。与访问嵌套对象一样，用中括号操作符同样可以访问嵌套数组。

下面是如何访问嵌套数组的例子：

var ourPets = { 
  "cats": [
    "Meowzer",
    "Fluffy",
    "Kit-Cat"
  ],
  "dogs": [
    "Spot",
    "Bowser",
    "Frankie"
  ]
};
ourPets.cats[1]; // "Fluffy"
ourPets.dogs[0]; // "Spot"
任务
使用点操作符和中括号操作符来检索变量 myPlants 的第二棵树。
*/
