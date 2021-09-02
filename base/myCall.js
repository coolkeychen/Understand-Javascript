/*
 * @Description: myCall
 * @Author: 陈春凯
 * @Date: 2021-08-19 16:38:37
 * @LastEditTime: 2021-08-19 17:21:45
 * @LastEditor: 陈春凯
 */

Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  context = context || window;
  context.fn = this;
  // console.log('arguments',arguments);
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myCall(this, name, price);
  this.category = 'food'
}

console.log(new Food('ca',5).name);
