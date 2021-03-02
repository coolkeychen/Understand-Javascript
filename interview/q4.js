/*
 * @Description: 队列
 * @Author: Cat
 * @Date: 2021-03-02 15:42:06
 * @LastEditTime: 2021-03-02 16:05:00
 * @LastEditor: Cat
 */

class LazyManClass {
  constructor(name) {
    this.name = name;
    this.quese = [];
    console.log(`Hi, I am ${name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  sleepFirst(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`先休息了 ${time} 秒...`);
        this.next();
      }, time*1000);
    }
    this.quese.unshift(fn);
    return this;
  }

  sleep(time) {
    const fn = () => {
      setTimeout(() => {
        console.log(`等待了 ${time} 秒...`);
        this.next();
      }, time*1000);
    }
    this.quese.push(fn);
    return this;
  }

  eat(food) {
    const fn = () => {
      console.log(`I am eating ${food} ！！`);
      this.next();
    }
    this.quese.push(fn);
    return this;
  }

  next() {
    const fn = this.quese.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name)
}

LazyMan('Tony').eat('Lanch').sleep(10).eat('Dinner').sleepFirst(5)