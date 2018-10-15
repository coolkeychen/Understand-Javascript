/**
 * @author coolkeychen
 * @date 2018/10/15
 * @Description: 浅拷贝
 */

function shallowClone(source) {
    var target = {};
    console.log(source);
    /*source.forEach(function (item) {
        if(source.hasOwnProperty(item)) {
            target[item] = source[item];
        }
    });*/
    for (let i in source) {
        if(source.hasOwnProperty(i)) {
            target[i] = source[i];
        }
    }

    return target;
}

let a = {
    hello: '你好',
    arr: [1,2,3,4]
    /*sayHello:function () {
        console.log(hello);
    }*/
}

let b = shallowClone(a);
console.log(b);
a.arr[0] = 4;
console.log(a);   // 4
console.log(b);   // 4