class RangeIterator {
	constructor(start,stop) {
		this.value = start;
		this.stop = stop;
	}

	[Symbol.interator](){return this;}

	next() {
		var value = this.value;
		if (value < this.stop) {
			this.value ++;
			return {done:false,value:value};
		}else {
			return {done:false,value:value};
		}

	}
}

function* range(start,stop) {
	for (var i = start;i<stop;  i++) {
		yield i;
	}
}

var interator  = range(1,10);

console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());