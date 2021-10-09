/*
 * @Description: 手工实现New
 * @Author: cat
 * @Date: 2021-10-09 14:33:13
 * @LastEditTime: 2021-10-09 14:45:49
 * @LastEditor: cat
 */

function myNew(fn,...args) {
  if (typeof fn != 'function') {
    throw 'fn must be a function';
  }
  const obj = Object.create(fn.prototype);
  const res = fn.apply(obj, args)
  return res instanceof Object ? res : obj;
}


function Person(name) {
  this.name = name
}

const xiao = myNew(Person, '小小');
console.log(xiao.name);