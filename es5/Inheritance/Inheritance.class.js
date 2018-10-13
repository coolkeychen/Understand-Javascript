/**
 * @author coolkeychen
 * @date 2018/10/12
 * @Description: 使用 ES6 语法实现继承
 * @ class 为 ES6 新属性，也是一种语法糖，实际上还是原型继承，只不过简写，方便使用
 */

class Student {
    constructor(name) {
        this.name = name
    }
    say() {
        `hello ${this.name}`;
    }
}

class primaryStudent extends Student{
    constructor(name,grade) {
        super(name);
        this.grade = grade;
    }
    setgrade() {
        return `I am at grade ${this.grade}`;
    }
}

let cat = new primaryStudent('xiaoming','1');

console.log(cat.name);
console.log(cat.setgrade());


