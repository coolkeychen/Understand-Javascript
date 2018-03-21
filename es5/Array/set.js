var m = new Map();
m.set('Adam',67);
m.set('Bob',59);

console.log(m);

console.log(m.has('Adam'));
console.log(m.get('Adam'));
m.delete('Adam');
console.log(m.get('Adam'));


var s1 = new Set();
var s2 = new Set([1,2,3]);


console.log(s2);
var s = new Set([1,2,3,3,'4']);
console.log(s);


s.add(5);
console.log(s);
s.delete('4');

console.log(s);
