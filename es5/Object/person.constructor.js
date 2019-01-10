/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: 利用构造函数创建对象
 */

function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };

}

let person1 = new Person("Nicholas",29, "Software Engineer");
let person2 = new Person("Cat",29, "Software Engineer");


console.log(person1);
console.log(person2);
console.log(person1.constructor == Person);
console.log(person2.constructor == Person);
console.log(person1 instanceof Object);
console.log(person1 instanceof Person);
console.log(person1.sayName == person2.sayName);
