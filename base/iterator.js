/*
 * @Description: 迭代器
 * @Author: cat
 * @Date: 2021-10-09 17:22:18
 * @LastEditTime: 2021-10-09 17:29:42
 * @LastEditor: cat
 */


let arr = [{num:1}, 2 ,3 ]
let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());