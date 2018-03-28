/**
 * call 和 apple 作用
 * 1、改变 this 的指向（把 this 从 obj2 指向到 obj1）
 * 2、方法借用 (obj1 没有 fn ,借用 obj2 方法)
 * */

let obj1 = {
    a: 222
}

let obj2 = {
    a: 111,
    fn:function () {
        console.log(this.a);
    }
}

obj2.fn.call(obj1);