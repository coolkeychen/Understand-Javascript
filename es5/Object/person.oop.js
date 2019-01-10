/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: 动态原型模式
 */

function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}


var person1 = new Person('cat',29,'software');
var person2 = new Person('hua',29,'software');


console.log(person2.sayName == person1.sayName);
