/*
*
* 可以用一种构造函数的方法来创建对象
* 注意，如果不写new，这就是一个普通函数，它返回undefined。但是，如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this
*
* xiaoming ↘
* xiaohong -→ Student.prototype ----> Object.prototype ----> null
* xiaojun  ↗
* */
function Student(name) {
    this.name = name;
    this.hello = function () {
        return ('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('cat');
console.log(xiaoming.name);
console.log(xiaoming.hello());

/*
*
* 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：
*
* */


console.log(xiaoming.constructor === Student.prototype.constructor);
console.log(Student.prototype.constructor === Student);
console.log(Object.getPrototypeOf(xiaoming) === Student.prototype);
console.log(xiaoming instanceof Student);

function Child(props) {
    this.name = props.name || '匿名';
    this.grade = props.grade || 1;
}

Child.prototype.hello = function () {
    return ('Hello, '+ this.name + ' !');
}

function createChild(props) {
    return new Child(props);
}

var xiaoming = createChild({
    name: '小明',
})

xiaoming.grade = 2;

console.log(xiaoming.hello());
