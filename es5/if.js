'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));

var bmi = weight/height*height;
var bmiLog = '';
if (bmi < 18.5) {
    bmiLog  = '过轻';
} else if(bmi>= 18.5 && bmi< 25) {
    bmiLog  = '正常';
} else if(bmi>= 25 && bmi< 28) {
    bmiLog  = '过重';
}else if(bmi>= 28 && bmi< 32) {
    bmiLog  = '肥胖';
} else {
    bmiLog  = '严重肥胖';
}

console.log(bmiLog );