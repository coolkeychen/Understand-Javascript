/**
 * @author coolkeychen
 * @date 2018/10/22
 * @Description: 阶乖函数
 */

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num -1);
    }
}

console.log(factorial(3));

function factorial2(num) {
    // console.log(Object.hasOwnProperty(arguments));
    // console.log(typeof arguments)
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

console.log(factorial2(3));

factorial = function() {
    return 0;
}
var trueFactorial = factorial;
console.log(trueFactorial(3));
console.log(factorial(3))

