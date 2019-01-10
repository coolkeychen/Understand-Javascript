/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: String 基本包装类型
 */

let stringValue = "Hello,World";
console.log(stringValue.length);
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));
console.log(stringValue.concat("!"));
console.log(stringValue.slice(3));
console.log(stringValue.substring(3));
console.log(stringValue.substring(3,7));
console.log(stringValue.slice(3,7));
console.log(stringValue.substr(3,7));


console.log(stringValue.slice(-3));
console.log(stringValue.substring(-3));
console.log(stringValue.substr(-3));

console.log(stringValue.slice(3,-4));
console.log(stringValue.substring(3,-4));
console.log(stringValue.substr(3,-4));

console.log(stringValue.indexOf('o'));
console.log(stringValue.lastIndexOf('o'));


