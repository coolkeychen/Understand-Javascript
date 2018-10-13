/**
 * @author coolkeychen
 * @date 2018/10/12
 * @Description: 原型继承
 * @ 封装一个桥接函数来实现原型继承
 */

function inherits(parent,child) {
    var F = function () {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}

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

inherits(Shape,Rectangle);

var rect = new Rectangle({
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