/**
 * @author coolkeychen
 * @date 2018/10/22
 * @Description: 函数提升
 */

/**
 * javascript 引擎在第一遍会声明函数并将它们放到源代码树的顶部
 */

console.log(add(10,20));
function add(arg1,arg2) {
   return arg1 + arg2;
}

/**
 * 底下是在一个初始化环境中，而不是在一个函数声明中
 *
 */
console.log(minus(20,10));
var minus = function (arg1,arg2) {
    return arg1 - arg2;
}