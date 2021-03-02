/*
 * @Description: 将数组扁平化并去除其中重复部分数据，最终得到一个升序且不重复的数组
 * @Author: Cat
 * @Date: 2021-03-01 17:51:24
 * @LastEditTime: 2021-03-01 17:58:22
 * @LastEditor: Cat
 */

 const arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10]

 const arr2 = Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{return a-b})

 console.log('arr2',arr2)