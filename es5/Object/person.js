/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: person
 */

var person  = {};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    value: "Nicholas"
});

console.log(person.name);
person.name = "Greg";
console.log(person.name);
delete person.name;
