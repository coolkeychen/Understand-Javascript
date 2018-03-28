'use strict'

var arr = [1,3,4,6,73,9,29,3,4,73];

var r = arr.filter(function(element,index,self) {
    // console.log(element);
    // console.log(index);
    // console.log(self);
    return true;
})

console.log(r);

/*
*
* 利用 filter 可以巧妙去重
*
* */


var nr = arr.filter(function (element,index,self) {
    console.log(self.indexOf(element));
    console.log(index);
    return self.indexOf(element) === index;
})
console.log(nr);