/*
 * @Description: 字符串取反
 * @Author: Cat
 * @Date: 2021-03-02 16:19:45
 * @LastEditTime: 2021-03-02 16:27:48
 * @LastEditor: Cat
 */


let str = 'AbCdEF'


/* 这个考的是 split */
function processString(str) {
  let tempStr = str.split('');
  const temArr = tempStr.map(item => {
    return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  })
  return temArr.join('');
}

console.log(processString(str));

/* 这个考的是 string.length */

function swapString(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item === item.toUpperCase()) {
      result+= item.toLowerCase();
    } else {
      result+= item.toUpperCase();
    }
  }
  return result;
}

console.log(swapString(str));