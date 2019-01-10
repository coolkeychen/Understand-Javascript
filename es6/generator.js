/**
 * 1、返回一个可迭代对象的表达式
 * 2、除了生成器对象这一种可迭代对象，yiild* 还可以 yield 其它任意的可迭代对象，比如说数组，字符串， arguments 对象等
 * 3、生成器不是线程，在支持线程的语言中， 多段代码可以同时运行，通通导致竞态条件和非确定性，不过同时也带来不错的性能。生成器则完全不同。当生成器运行时，它和调用者牌同一线程中，拥有确定的连续执行顺序，永不并发。
 */


function* quips(name) {
	yield "你好"+name+'!';
	yield name+"我真帅";
	yield* g1();
	yield name+"再见";
	yield* [8,9,10];
	yield* 'cat';
	return 'end';
}

function* g1() {
	yield 2;
	yield 3;
	yield 4;
}

var iterator = quips('cat');

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
