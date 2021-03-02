/*
 * @Description: 如何实现一个flatten函数 ， flatten 字义为扁平化
 * @Author: Cat
 * @Date: 2021-03-02 10:00:13
 * @LastEditTime: 2021-03-02 10:10:37
 * @LastEditor: Cat
 */


var arr = [1,2,3,[4,5],[6,[7,[8,[9]]]]]

function wrap() {
  var ret = [];
  return function flat(a) {
    for (item of a) {
      // console.log(item.constructor)
      if (item.constructor === Array) {
        ret.concat(flat(item))
      } else {
        ret.push(item);
      }
    }
    return ret
  }
}

console.log(wrap()(arr))