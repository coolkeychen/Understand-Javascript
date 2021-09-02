/*
 * @Description: 
 * @Author: 陈春凯
 * @Date: 2021-08-19 10:00:11
 * @LastEditTime: 2021-08-19 11:35:10
 * @LastEditor: 陈春凯
 */
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())


for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, 1000)
}

for (var i = 1; i <= 5; i++) {
  (function(i) {
    setTimeout(function timer() {
      console.log(i)
    }, 1000)
  })(i)
}

let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
