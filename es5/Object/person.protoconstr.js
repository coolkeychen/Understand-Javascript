/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: 组合使用构造函数和原型模式，构造函数用于定义实例属性，而原型模式用于定义方法和共享的属性
 */

function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['john','wang']
}


Person.prototype = {
    constructor:Person,
    sayName: function () {
        console.log(this.name);
    }
}


var person1 = new Person('cat',29,'software');
var person2 = new Person('hua',29,'software');


person1.friends.push('fu');
console.log(person1.friends);
console.log(person2.friends);

console.log(person2.friends == person1.friends);
console.log(person2.sayName == person1.sayName);
