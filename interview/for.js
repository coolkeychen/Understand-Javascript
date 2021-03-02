/*
 * @Description: 改造代码，使之输出 0-9
 * @Author: Cat
 * @Date: 2021-03-01 18:04:53
 * @LastEditTime: 2021-03-01 18:08:59
 * @LastEditor: Cat
 */

for (var index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
}

/* 解法一 */

for (let index = 0; index < 10; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
}

/* 解法二 */

for (var index = 0; index < 10; index++) {
  ((i)=>{
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(index)
  
}