/*
 * @Description: let
 * @Author: Cat
 * @Date: 2021-01-07 14:42:55
 * @LastEditTime: 2021-01-07 15:39:14
 * @LastEditor: Cat
 */

let list = []
for (var i = 0; i < 10; i++) {
  // console.log('for',i);  
  list.push(i);
}
console.log('out',i)

var funcs = [];
for (var i = 0; i < 10; i++) {
  funcs.push(function(params) {console.log('i',i);})
}

funcs.forEach(function(func){
  func();
})


var funcs2 = [];
for (var i = 0; i < 10; i++) {
  funcs2.push((function(value) {
    return function() {
      console.log('value',value);
    }
  }(i)));
}

funcs2.forEach(function(func){
  func();
})


// for (const i = 0; i < 10; i++) {
//   console.log('const',i)  
// }

var msg = "hello world!";
console.log(msg.startsWith('h'));
console.log(msg.endsWith('!'));
console.log(msg.includes('o'));

console.log(msg.startsWith('o',4));
console.log(msg.endsWith('o',8));
console.log(msg.includes('o',8));

console.log("x".repeat(3));