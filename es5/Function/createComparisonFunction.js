/**
 * @author coolkeychen
 * @date 2018/10/22
 * @Description:
 */


function createComparisonFunction(propertyName) {
    return function (obj1,obj2) {
        var value1 = obj1[propertyName];
        var value2 = obj2[propertyName];
        console.log(obj1);
        console.log(obj2);

        if (value1> value2) {
            return 1;
        } else if (value1 < value2) {
            return -1;
        } else {
            return 0;
        }
    }

}


var data =[{name:'cat',age:29},{name:'hua',age:28}];

data.sort(createComparisonFunction("name"));
console.log(data[0].name);

data.sort(createComparisonFunction("age"));
console.log(data);
console.log(data[0].age)