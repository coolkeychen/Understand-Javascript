'use strict'

var now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());

var d = new Date(1522316248413);
console.log(d);
console.log(d.getMonth());

console.log(d.toLocaleString());
console.log(d.toUTCString());
