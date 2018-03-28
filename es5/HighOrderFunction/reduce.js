var arr = [1,3,5,7,9];
var result = arr.reduce(function (x,y) {
    return x + y;
})
console.log(result);

var result1 = arr.reduce(function (x,y) {
    return x*10 +y;
})
console.log(result1);

