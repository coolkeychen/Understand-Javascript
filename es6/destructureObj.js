/**
 * 解构函数实际运用
 * @type {Map}
 */
var map = new Map();

map.set(global,"the global");


for ([key,value] of map) {
	console.log(key + 'is ' + value);
	console.log(`${key} is ${value}`);
}

function returnMultipleValues() {
	return [1,2];
}

var [foo,bar] = returnMultipleValues();
console.log(foo);
console.log(bar);