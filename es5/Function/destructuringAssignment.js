/*
* 解构赋值
*
* */

/*传统方法*/
'use strict'

var person= ['cat',28,'ES6']
var x = person[0];
var y = person[1];

console.log('x= '+ x + '; y= '+y);

var [x,y] = ['cat','Learn ES6']
console.log('x= '+ x + '; y= '+y);

//如果需要从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性：

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-19527',
    school: 'jimei Middle school'
}
var {name,age,gender} = person;
console.log('name = ' + name + ', age = ' + age + ', gender = ' + gender);

// 如果解析函数对对象属性进行赋值时，对应属性不存在，变量将被赋值 为 undefined
var {name,age,id} = person;
console.log(id);

// 解析函数可以使用默认值，可以僻免不存在的属性返回 undefined

var {name,single=true} = person;
console.log(single);

//有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误
// 这是因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。解决方法是用小括号括起来：
var x,y;
/*
语法报错
{x,y}= {name:'小明',x:100,y:200}
*/
({x,y}= {name:'小明',x:100,y:200})
console.log(x);
console.log(y);

/*
* 使用场景
* 1、交换变量值，不再需要临时变量
* 2、快速获取当前页面的域名和路径：
* 3、减少代码量
* */

var a = 1, b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);
// var {hostname:domain, pathname:path} = location;

function buildDate({year,month,day,hour=0,minute=0,second=0}) {
    // console.log(year+'-'+ month + '-' + day+ ' '+ hour + ':' + minute + ':' + second));
    return new Date(year+'-'+ month + '-' + day+ ' '+ hour + ':' + minute + ':' + second);
}
console.log(buildDate({year:2018,month:3,day:28}));

console.log(buildDate({year:2018,month:3,day:1,hour:20,minute:20}));
