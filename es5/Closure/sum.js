function sum(arr) {
    return arr.reduce(function (x,y) {
        return x + y;
    });
}

console.log(sum([1,2,3,4,5]));

/*
* 在这个例子中，我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。
* */

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x,y) {
            return x + y;
        });
    }
    return sum;
}

var f = lazy_sum([1,2,3,4,5]);

console.log(f());

var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
console.log(f1 === f2); // false


function count() {
    var arr = [];
    for (var i = 1; i<= 3; i++) {
        arr.push(function () {
            return i * i;
        })
    }
    return arr;
}


var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());


/*
* 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
* 如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变：
* 下面使用的是匿名函数
* */
function count1() {
    var arr = [];
    for (var i = 1;i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results1 = count1();
var f4 = results1[0];
var f5 = results1[1];
var f6 = results1[2];
console.log(f4());
console.log(f5());
console.log(f6());

console.log((function (x) {
    return x * x;
})(9));


/*
* 闭包强大功能
* 1、在没有class机制，只有函数的语言里，借助闭包，同样可以封装一个私有变量。
* 2、闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
* 3、闭包还可以把多参数的函数变成单参数的函数
*
* */

function create_calculator(inital) {
    var couter = inital || 0;
    return {
        int:function () {
            couter += 1;
            return couter;
        }
    }
}

var f = create_calculator(10);
console.log(f.int());
console.log(f.int());
console.log(f.int());
console.log(f.int());


function make_pow(n) {
    return function (x) {
        return Math.pow(x,n);
    }
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);
console.log(pow2(5));
console.log(pow3(3));
