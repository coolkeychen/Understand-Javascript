/*var singleton = function () {
	var privateVariable = 10;

	function privateFunction() {
		return false;
	}

	return {
		publicProperty:true,
		publicMethod: function() {
			privateVariable++;
			return privateFunction();
		}
	}
}*/

var singleton = function () {
	var privateVariable = 10;

	function privateFunction() {
		return false;
	}

	var object = new CustomType();

	object.publicProperty = true;

	object.publicMethod = function() {
		privateVariable ++;
		return privateFunction();
	}
}

var p = new singleton();
console.log(p.publicMethod());