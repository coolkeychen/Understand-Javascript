/**
 * @author coolkeychen
 * @date 2018/10/19
 * @Description: reduce() & reduceRight()
 */


let number =[3,4,5,4,3,2,1];

let reduceResult = number.reduce(function (prev,cur) {
    console.log(prev);
    console.log(cur);
    return prev + cur;
});

console.log(reduceResult);

let reduceRightResult = number.reduceRight(function (prev,cur) {
    console.log(prev);
    console.log(cur);
    return prev + cur;
});

console.log(reduceRightResult);
