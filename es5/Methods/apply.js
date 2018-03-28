/*
* apply(), call() 可以控制 this 的指向问题
* apply()把参数打包成Array再传入；
* call()把参数按顺序传入
* **/

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1989,
    age:getAge
}


console.log(getAge.apply(xiaoming,[]));


// 对普通函数调用，我们通常把this绑定为null。

console.log(Math.max.apply(null, [3,5,19]));
console.log(Math.max.call(null, 3,5,19));