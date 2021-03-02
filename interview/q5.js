/*
 * @Description: 两个数组求交集
 * @Author: Cat
 * @Date: 2021-03-02 16:06:02
 * @LastEditTime: 2021-03-02 16:08:24
 * @LastEditor: Cat
 */

let arr1 = [1,2,3,3,5], arr2 = [2,3]

/* 解法一 */
const array = arr1.filter(item => {
  return arr2.indexOf(item) > -1;
})

console.log(array);

/* 解法二 */

const array2 = arr1.filter(item => {
  return arr2.includes(item);
})

console.log(array2);