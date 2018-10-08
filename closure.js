function createCounter() {
	let counter = 0;
	const counterFun = function () {
		counter +=1;
		return counter;
	}
	return counterFun;
	
}


const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1,c2,c3);

/*function createCounter() {
   let counter = 0
   const myFunction = function() {
	counter = counter + 1
	return counter
	}
	return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)*/

let c = 4;
const addX = x => n => n+x;
const addThree = addX(3);
let d = addThree(c);
console.info(d);
console.debug(addThree);


/*
for (var i = 1; i < 10; i++) {
	for (var j = 1; j <=i; j++) {
		console.log(i + '*' + j);
	};
		console.log('\n');
};*/

console.log(Math.sin(30*Math.PI/180));