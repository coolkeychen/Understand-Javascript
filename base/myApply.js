/*
 * @Description: myApply
 * @Author: cat
 * @Date: 2021-08-19 16:50:38
 * @LastEditTime: 2021-10-09 09:44:41
 * @LastEditor: cat
 */

Function.prototype.myApply = function(context) {
  if (typeof this != 'function') {
    throw new TypeError('Type Error !');
  }
  context = context || window;
  context.fn = this;
  let result;
  if(arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.myApply(this, [name, price]);
  this.category = 'food'
}

console.log(new Food('ca',5).name);
console.log(new Food('do',5).category);

