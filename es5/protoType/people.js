// 面向对象
let People = function (name) {
    this.name = name;
}

People.prototype = {
    eat:function (something) {
        console.log(`${this.name}吃${something}`);
    }
}

let shou = new People('婊渣','男',24);
shou.eat('火锅');

shou.coding = function () {
    console.log(this.name + '写bug');
}
shou.coding();

// 面向过程

let eat = function (who,someThing) {
    console.log(`${who}吃${someThing}`);
}

eat('婊渣','火锅');

let coding = function (who) {
    console.log(who + '写bug');
}
coding('婊渣');