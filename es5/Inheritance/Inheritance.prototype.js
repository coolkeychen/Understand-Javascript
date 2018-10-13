/**
 * @ 原型继承
 * @ 通过一个空函数、桥接函数来实现原型继承
 */

 function Shape(props) {
     this.width = props.width || 10;
     this.height = props.height || 10;
     this.posX = props.posX || 0;
     this.posY = props.posY || 0;
 }

 Shape.prototype.move = function (params) {
     this.posX += params.x;
     this.posY += params.y;
 }


 function Rectangle(props) {
     Shape.call(this, props);
     this.name = props.name || 'Unnamed';
 }

 // 创造一个空函数
 function F() {
     
 }

 // 把F的原型指向 Shape 的原型
 F.prototype = Shape.prototype;

 // 把 Rectangle 的原型指向F新对象
Rectangle.prototype = new F();

Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle({
    width: 90,
    height: 60,
    posX: 3,
    posY: 3,
    name: '我很方'
});


console.log(rect);
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
console.log(rect.__proto__ === Rectangle.prototype);
console.log(rect.__proto__.__proto__ === Shape.prototype);

