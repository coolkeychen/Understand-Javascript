(function(){
	var name = '';

	Person = function(value) {
		name = value;
	};

	Person.prototype.getName = function() {
		return name;
	};

	Person.prototype.setName = function(value) {
		name = value;
	}
})();

var person1 = new Person('cat');
console.log(person1.getName());
person1.setName('dog');
console.log(person1.getName());

var person2 = new Person("Micheal");
console.log(person2.getName());
console.log(person1.getName());