/*
* this 的指向问题
* this到底指向谁？
  答案是，视情况而定！
  如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
  如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
* */

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1989,
    age:getAge
}

console.log(xiaoming.age());
console.log(getAge());

