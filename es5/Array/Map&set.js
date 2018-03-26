var m = new Map([['Michael',95],['Bob',75],['Tracy',85]]);
console.log(m);


/*var table = new Map([['1','国伟'],['2','小涂'],['3','建华'],['4','世榕'],['5','朝阳'],['6','春凯'],['7','罗昆'],['8','亦斌'],['9','月丽'],['10','京磊'],['11','剑烘'],['12','刘思'],['13','成文'],['14','亦杰']]);
var newTable = new Map();
let tableNo = [];
for(var x of table) {
    tableNo.push(x[0]);
}

console.log(Object.keys(table).length);
function getNewTable() {
    for(let i =0; i< tableNo.length; i++) {
        let a = Math.floor((Math.random()*tableNo.length))+'';
        if(table.has(a)) {
            newTable.set(a,table.get(a));
            table.delete(a);
        };
    }
}


getNewTable();
console.log(newTable);
console.log(tableNo.length);
console.log(table);
*/