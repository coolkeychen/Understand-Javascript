function deepClone(obj) {
  let result;
  // 区分对象
  if (Object.prototype.toString.call(obj) == '[object String]') {
    result = {};
    for (let attr in obj) {
      result[attr] = deepClone(obj[attr]);
    }
  } else if (Object.prototype.toString.call(obj) == '[object Array]') {
    result = [];
    for (let i = 0; i < obj.length; i++) {
      result[i] = deepClone(obj[i])
    }
  } else {
    result = obj
  }
  return obj
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
let newObj = deepClone(obj)
console.log(newObj)


