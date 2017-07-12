function randomRange(myMin, myMax) {

  return Math.floor(Math.random()* (myMax - myMin + 1)) + myMin;
}


var myRandom = randomRange(5, 15);

/*
我们之前生成的随机数是在0到某个数之间，现在我们要生成的随机数是在两个指定的数之间。

我们需要定义一个最小值和一个最大值。

下面是我们将要使用的方法，仔细看看并尝试理解这行代码到底在干嘛：

Math.floor(Math.random() * (max - min + 1)) + min

任务
创建一个叫randomRange的函数，参数为myMin和myMax，返回一个在myMin(包括myMin)和myMax(包括myMax)之间的随机数。
*/
