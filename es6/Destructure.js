/**
 * 析构函数
 */

let [head,...tail] = [1,2,3,4];
console.log(tail);


var {foo,bar} = {foo:"lorem",bar:"ipsum"}
console.log(foo);
console.log(bar);

var complicatedObj = {
	arrayProp: [
		"Zapp",
		{second: "Brannigan"}
	]
}

var {arrayProp:[first,{second}]} = complicatedObj;
console.log(first);
console.log(second);
console.log(typeof second);

var {missing} = {}
console.log(missing);