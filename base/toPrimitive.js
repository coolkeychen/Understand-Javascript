/*
 * @Description: 
 * @Author: 陈春凯
 * @Date: 2021-08-19 09:49:15
 * @LastEditTime: 2021-08-19 09:54:12
 * @LastEditor: 陈春凯
 */

/** 
 * 如果已经是原始类型了，那就不需要转换了
 * 调用 x.valueOf()，如果转换为基础类型，就返回转换的值
 * 调用 x.toString()，如果转换为基础类型，就返回转换的值
 * 如果都没有返回原始类型，就会报错
 */
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  },
  [Symbol.toPrimitive]() {
    return 2
  }
}

console.log(1+a)