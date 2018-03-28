'use strict'

console.log(['Google','Microsoft','Apple'].sort());

console.log(['Google','apple','Microsoft'].sort());


/*

* 数字排序:Array的sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小。
*/
console.log([10,1,9,2].sort());

var a = [10,1,9,2];
var b = a.sort(function (x,y) {
    if (x> y) return 1;
    if (x< y) return -1;
    return 0
});
console.log(b);

/*
* 默认情况下，对字符串排序，是按照ASCII的大小比较的,实际上就是先把字符串都变成大写（或者都变成小写），再比较。
*
* */

var c = ['Google','Microsoft','apple'];
var d = c.sort(function (x,y) {
    x = x.toUpperCase();
    y = y.toUpperCase();
    if (x> y) return 1;
    if (x< y) return -1;
    return 0
})
console.log(d);