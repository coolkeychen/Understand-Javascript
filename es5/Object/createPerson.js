/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: createPerson
 * @ 工厂模式
 */

function createPerson(name,age,job) {
    var o  = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    }
    return o;
}

let person1 = createPerson("Nicholas",29, "Software Engineer");
let person2 = createPerson("Cat",29, "Software Engineer");

console.log(person1);
console.log(person2);
