'use strict';
var a = ['A','B','C'];

a.forEach(function (element, index ,array) {
    console.log(element + ' , index = '+index);
})

var s = new Set(['A','B','C']);
s.forEach(function (element, sameElement, set) {
    console.log(element + ' , sameElement = '+ sameElement)
});

var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
m.forEach(function (value,key,map) {
    console.log(value + ', key =' + key)
})