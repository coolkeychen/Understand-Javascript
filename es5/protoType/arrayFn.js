/**
 * 箭头函数 this 指向为上层作用域
 * */

let obj = {
    a: 111,
    fn:function () {
        setTimeout(function () {
            console.log(this.a);
        })
    }
}

obj.fn();



let obj1 = {
    a: 111,
    fn:function () {
        setTimeout(()=> {
            console.log(this.a);
        })
    }
}

obj1.fn();
