/*
* 1、javascript 局部作用域也就是块级作用域实际上是在函数内部
* 2、为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：
* */

function fn() {
    for (var i = 0; i< 100;i++) {

    }
    console.log(i++);
}

fn();
