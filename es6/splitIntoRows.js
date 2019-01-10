/** 
 * 拆分
 */

function spliIntoRows(icons,rowLength) {
	var rows = [];
	for (var i = 0; i < icons.length; i+=rowLength) {
		rows.push(icons.splice(i,i+rowLength));
	}
	return rows;
}


var temp = [1,23,14,1,41,44,46,4532,4234,322434,52,13];
console.log(spliIntoRows(temp,2));