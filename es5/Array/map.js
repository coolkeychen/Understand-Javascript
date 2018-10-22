/**
 * @author coolkeychen
 * @date 2018/10/19
 * @Description: 数组的迭代方法
 * @ map() 对数组中的每一项运行给定函数，返回每次函数返回结果组成的函数
 *
 */



 let number =[3,4,5,4,3,2,1];

 mapResult = number.map(function (item) {
    return item*3;
 });

 console.log(mapResult);
