/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description:
 */


function Person() {

}

Person.prototype ={
    constructor:Person,
    name: "cat",
    age: 29,
    job: "Software Engineer",
    sayName: function () {
        console.log(this.name);
    }
}

Object.defineProperty(Person.prototype,"constructor", {
    enumerable:false,
    value:Person
})

let friend = new Person();
console.log(friend instanceof Object);
console.log(friend instanceof Person);
console.log(friend.constructor == Person);



let student = new Person();

console.log(student instanceof Object);
console.log(student instanceof Person);
console.log(student.constructor == Person);
