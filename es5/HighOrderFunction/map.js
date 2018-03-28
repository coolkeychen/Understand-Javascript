'use strict';

function pow(x) {
    return x*x;
}

var arr = [1,2,3,4,5,6,7,8,9];
var result = arr.map(pow);
var result1 = arr.map(String);

console.log(result);
console.log(result1);
