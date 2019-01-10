/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: 寄生构造函数模式
 */


function Person(name,age,job) {
    var o = new Object();
    o.name = name;
    o.job = job;
    o.age = age;
    o.sayName = function () {
        console.log(o.name);
    }
    return o;
}

var person1 = new Person('cat',29,'software');
var person2 = new Person('hua',29,'software');


console.log(person2.sayName == person1.sayName);
