/**
 * @author coolkeychen
 * @date 2018/10/15
 * @Description: 深拷贝
 * @ 浅拷贝+递归
 * @ 如果对象比较大，层级也比较多，深复制会带来性能上的问题,层级太深，栈会溢出，数据
 * @ 1、对参数做检验
 * @ 2、对数组、对象进行递归浅拷贝，对于function类型，个人觉得直接进行赋值的，还是共享一个内存值。这是因为函数更多的是完成某些功能，有个输入值和返回值，而且对于上层业务而言更多的是完成业务功能，并不需要真正将函数深拷贝
 * 
 */

const getType = function (obj) {
    const toString = Object.prototype.toString;
    let map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
    };
    /*if (obj instanceof Element) {
        return 'element';
    }*/
    return map[toString.call(obj)]

}

const deepCopy = function (source) {
    const type = getType(source);
    let obj;

    if (type === 'object') {
        obj = {}
        for (let key in source) {
            obj[key] = deepCopy(source[key]);
        }
    } else if (type === 'array'){
        obj =[];
        for (let i=0; i< source.length; i++) {
            obj.push(deepCopy(source[i]));
        }
    } else {
       obj = source;
    }

    return obj;
}

let a = {
    hello: '你好',
    arr: [1,2,3,4],
    obj: {
        b: '111',
        c: 'aaa',
        d: 'ddd'
    }
    /*sayHello:function () {
        console.log(hello);
    }*/
}

let c = [1,2,3,4];



let b = deepCopy(a);
console.log(a);
console.log(b);





