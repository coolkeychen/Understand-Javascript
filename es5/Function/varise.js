/*
* javascript 引擎自动提升了变量y的声明，但不会提升变量y 的赋值；
* */

'use strict';

function foo() {
    var x = 'Hello, '+ y;
    console.log(x);
    var y = '小明';
}

foo();

/*
* 上面代码类似以下代码
*

function foo() {
    var y,x;
    x = 'Hello, '+y;
    console.log(x);
    y = '小明';
}
*/