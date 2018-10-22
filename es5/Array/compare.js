/**
 * @author coolkeychen
 * @date 2018/10/19
 * @Description: sort 函数可以对数组进行升序排序，sort 方法会调用每个数组项的 toString() 转型方法，然后比较得到的字符串
 */

let values  = [0,10,5,15,1];
console.log(values.sort());   // 输出 [0,1,10,15,5], 比较的结果有问题

let compare = function (arg1,arg2) {
    if (arg1>arg2) {
        return 1
    } else if(arg1 < arg2) {
        return -1
    } else {
        return 0
    }
}

console.log(values.sort(compare));