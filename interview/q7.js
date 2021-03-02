/*
 * @Description: 打印对称数
 * @Author: Cat
 * @Date: 2021-03-02 16:47:09
 * @LastEditTime: 2021-03-02 17:03:39
 * @LastEditor: Cat
 */


console.log([...Array(10000).keys()]);

const arr = array.filter(item => {
  return item.toString().length > 1 && item === Number(item.toString().split('').reverse().join(''));
})

console.log(arr);