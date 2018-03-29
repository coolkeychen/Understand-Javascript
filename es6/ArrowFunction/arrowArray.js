/*
* 箭头函数相当于匿名函数，并且简化了函数定义
* 1、如果参数不是一个，就需要用括号()括起来
* */

console.log(((x,y)=>x*y)(2,4));

console.log((x=> 2*x*3.14)(3));

console.log((x=> { if ( x > 0) {return x * x} else { return - x * x}})(-9));

console.log(((x,y,...rest) => {
    var i, sum = x + y;
    for(i=0; i< rest.length; i++) {
        sum += rest[i];
    }
return sum;

})(1,3,[2,4,6,8,10]));
/*
* 与匿名函数的区别
* 箭头函数内部的this是词法作用域，由上下文确定。
* 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj：
* */

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var that = this;
        var fn = function () {
            return new Date().getFullYear() - that.birth;
        }
        return fn();
    }
}


console.log(obj.getAge());

var obj1 = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = ()=> new Date().getFullYear() - this.birth;
        return fn();
    }
}

console.log(obj1.getAge());


var birth = 1995;
var obj2 = {
    birth: 1990,
    getAge : () => {
        var b = this.birth;
        return new Date().getFullYear() - this.birth;
    }
};


console.log(obj2.getAge());
