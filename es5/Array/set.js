var m = new Map();
m.set('Adam',67);
m.set('Bob',59);

console.log(m);

console.log(m.has('Adam'));
console.log(m.get('Adam'));
m.delete('Adam');
console.log(m.get('Adam'));
