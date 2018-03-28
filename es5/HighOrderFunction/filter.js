'use strict'

var arr = [1,3,4,6,73,9,29];

var r = arr.filter(function (t) {
    return t % 2 !== 0;
})

console.log(r);


var nr = arr.filter((x)=> x%2 !==0);
console.log(nr);