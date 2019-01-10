/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: 利用 hasOwnProperty 和 in 判断属性是存在对象还是存在原型中
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
person1.age = 30;


console.log(person1.constructor == Person);

function hasPrototypeProperty(obj,name) {
    return !obj.hasOwnProperty(name) && (name in obj);
}

console.log(hasPrototypeProperty(person1,'age'));


let keys = Object.keys(Person.prototype);
console.log(keys);

let key = Object.getOwnPropertyNames(Person.prototype);
console.log(key);