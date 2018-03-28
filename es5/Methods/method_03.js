/*
* 用var that = this;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。
* */

'use strict';

var xiaoming = {
    name:'小明',
    birth: 1989,
    age: function () {
        var that = this;
        function getAgeByBirth() {
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeByBirth();
    }
}

console.log(xiaoming.age());