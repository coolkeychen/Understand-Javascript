'use strict'

var a = '13579';

function string2int(x) {
    var b = x.split("");
    var c = b.map(function (t) {
        return +t
    });

    console.log(c);
}

string2int(a);


function string2IntEs5(s) {
    return s.split('').map(function (t) { return +t });
    // return s.split('').map(function (t) { return +t }).reduce(function (x,y) { return x*10 +y })
}

console.log(string2IntEs5(a));


function string2IntEs6(s) {
    return Array.from(s).map((x)=>+x).reduce((x,y)=>x*10+y)
}

console.log(string2IntEs6(a));
