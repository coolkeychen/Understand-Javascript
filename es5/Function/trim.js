/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: trim toUpperCase toLocalCase
 */

let stringValue = " Hello World ";
let trimStringValue = stringValue.trim();
console.log(stringValue);
console.log(trimStringValue);


console.log(stringValue.toUpperCase());
console.log(stringValue.toLowerCase());


let text = "ct,bat,sat,fat";
let pattern = /.at/;
let matches = text.match(pattern);
console.log(matches.index);
console.log(matches);
console.log(pattern.lastIndex);


let pos = text.search(pattern);
console.log(pos);

let result = text.replace("at","ond");
console.log(result);

result = text.replace(/at/g,"ond");
console.log(result);