/**
 * @ 类式继承
 * @ 通过 Object.create 实现类式继承
 */

// 父类
 function Shape() {
     this.x = 0;
     this.y = 0;
 }

 Shape.prototype.move = function (x,y) {
     this.x += x;
     this.y += y;
 } 

// 子类
function Triangle(params) {
    Shape.call(this);
    this.angle = 60;
 }

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

let trian = new Triangle();

console.log('Is trian an instance of Triangle?',trian instanceof Triangle);

console.log('Is trian an instance of Shape?', trian instanceof Shape);

console.log(trian.__proto__ === Triangle.prototype);
console.log(trian.__proto__.__proto__ === Shape.prototype);

trian.move(2,3);
console.log(trian.x);
console.log(trian.y);
console.log(trian.angle);

console.log(Object.getPrototypeOf(trian) == Triangle.prototype);