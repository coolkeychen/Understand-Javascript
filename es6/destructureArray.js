/**
 * [destructureArray 数组解构赋的模式同样适用于任意迭化器]
 * @coolkeychen
 * @DateTime  2019-01-11T16:56:02+0800
 * @return    {[type]}                 [description]
 */
function* destructureArray() {
	var a = 0;
	var b = 2;
	while (true) {
		yield a;
		[a,b] = [b,a+b];
	}
}


var [first,second,third,forth,fifth,sixth] = destructureArray();
console.log(sixth);