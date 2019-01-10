

function* splitIntoRows2(icons,rowLength) {
	for (var i = 0; i < icons.length; i+=rowLength) {
		yield icons.slice(i, i+rowLength);
	}
}

var temp = [2,42,23,13,532,123,53,24,123,523,563,25,56];

var interator = splitIntoRows2(temp,3);
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());
console.log(interator.next());