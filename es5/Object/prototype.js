var Student = {
    name : 'Robot',
    height : 175,
    run:function () {
        return this.name + ' is running';
    }
}

var xiaoming = {
    name: '小明'
}

xiaoming.__proto__ = Student;
console.log(xiaoming.name);
console.log(xiaoming.run());

var Bird = {
    fly: function () {
        return this.name + ' is flying...';
    }
}

xiaoming.__proto__ = Bird;
console.log(xiaoming.fly());

/*
*
* Object.create()方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有
*
* */

function createStudent(name) {
 var s = Object.create(Student);
 s.name = name;
 return s;
}

var xiaoming = createStudent('cat');
console.log(xiaoming.run());
