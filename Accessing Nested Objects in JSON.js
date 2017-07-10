var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

/*
通过串联起来的点操作符或中括号操作符来访问JSON对象的嵌套属性。

下面是一个嵌套的JSON对象：

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
}
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"
任务
检索JSON对象 myStorage 中嵌套属性 glove box 的值。因为属性的名字带有空格，请使用中括号操作符来访问属性的值。
*/
