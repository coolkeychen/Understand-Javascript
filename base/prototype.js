/*
 * @Description: 
 * @Author: cat
 * @Date: 2021-10-09 10:20:05
 * @LastEditTime: 2021-10-09 11:39:12
 * @LastEditor: cat
 */

function Student(name) {
  this.name = name;
}

// 每个函数都有一个 prototype属性
Student.prototype.say = function () {
  console.log('Hello '+this.name+ '!');
}

// 实例化对象
const xiaoming = new Student('小明');
xiaoming.say();

// 
console.log(xiaoming.__proto__ == Student.prototype);
console.log(xiaoming.constructor == Student.prototype.constructor);
console.log(Student == Student.prototype.constructor);
console.log(Object.getPrototypeOf(xiaoming) == Student.prototype);


function PrimaryStudent(name, grade) {
  Student.call(this, name);
  this.grade = grade || 1;
}

const xiaohuang = new PrimaryStudent('小黄',3);
console.log(xiaohuang.name);
console.log(xiaohuang.grade);
console.log(xiaohuang.__proto__);

function F() {

}

F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
console.log(PrimaryStudent.prototype.constructor)
PrimaryStudent.prototype.constructor = PrimaryStudent


function inherits(Child,Parent) {
  const F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}


function inheritsCreate(Child,Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}


// 继承到多个对象
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其它
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.myMethod = function() {
  // do a thing
};