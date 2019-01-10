/**
 * @author coolkeychen
 * @date 2018/10/22
 * @Description: apply.js
 */

function sum(num,num2) {
    return num + num2;
}

function callSum(num1,num2) {
    return sum.apply(this,arguments);
}


function callSum2(num1,num2) {
    return sum.apply(this,[num1,num2]);
}

console.log(callSum(2,111))
console.log(callSum2(2,111))
