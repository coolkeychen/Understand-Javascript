/*
* 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中
* */
var MVAPP = {};

MVAPP.name = 'cat';
MVAPP.age = 28;

MVAPP.fn =function () {
    console.log('吃东西');
}

console.log(MVAPP.name);
