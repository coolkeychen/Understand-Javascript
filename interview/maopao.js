/*
 * @Description: 冒泡排序
 * @Author: Cat
 * @Date: 2021-03-02 14:36:14
 * @LastEditTime: 2021-03-02 14:49:07
 * @LastEditor: Cat
 */


const arr = [1,3,59,34,53,22,34,31,93]


function maopao(tempArr) {
  let array = [...tempArr];
  let isOk = true;
  for (let i = 0, len = array.length; i < len -1; i++) {
    const item = array[i];
    for (let j = i+1; j < len; j++){
      if (array[i]>array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        isOk =false
      }
      if (isOk) {
        break;
      } 
    }
    
  }
  return array;
}

console.log(maopao(arr));