/**
 * @author coolkeychen
 * @date 2018/10/19
 * @Description: 数组的迭代方法
 * @ every() 对数组中的每一项运行给定函数，如果每一项都返回 true,则返回 true
 * @ some() 对数组中的每一项运行给定函数，如果任一项都返回 true,则返回 true
 */

let number =[3,4,5,4,3,2,1];


let everyResult = number.every(function (item) {
    console.log(item)
    return (item>2);
})

console.log(everyResult);


let someResult = number.some(function (item) {
    console.log(item);
    return (item>2);
})

console.log(someResult);
