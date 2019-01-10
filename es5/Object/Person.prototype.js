/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: prototype
 * @创建的每个函数都有一个 prototype (原型)属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法
 */

function Person() {

}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "software Engnineer";
Person.prototype.sayName = function () {
    console.log(this.name);
}


let person1 = new Person();
let person2 = new Person();
person1.sayName();
person2.sayName();
console.log(person1.sayName == person2.sayName);
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Object.getPrototypeOf(person1) == Person.prototype);

console.log(person1.hasOwnProperty('name'));
person1.name = 'cat';
console.log(person1.hasOwnProperty('name'));



