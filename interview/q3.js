/*
 * @Description: Array From
 * @Author: Cat
 * @Date: 2021-03-02 15:00:15
 * @LastEditTime: 2021-03-02 15:15:09
 * @LastEditor: Cat
 */


let obj = {1:222, 4:333, 8:444}

const result = Array.from({length: 12}).map(( _,index ) => 
  obj[index+1] || null
)
console.log(result);