/*
 * @Description: myCall
 * @Author: cat
 * @Date: 2021-08-19 16:38:37
 * @LastEditTime: 2021-10-09 09:44:43
 * @LastEditor: cat
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
