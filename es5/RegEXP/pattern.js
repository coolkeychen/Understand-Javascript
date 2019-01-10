/**
 * @author coolkeychen
 * @date 2018/10/22
 * @Description: 正则表达式
 */


let a = 'at';

let pattern1 = /.at/gi;
let pattern2 = /\.at/gi;
console.log(pattern1.test(a));
console.log(pattern2.test(a));


