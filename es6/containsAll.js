/**
 * 1、要注意，应该从1开始迭代，而不是从0开始，arguments[0] 相当于参数 haystack
 */

function containsAll(haystack) {
	for (var i = 0; i < arguments.length; i++) {
		var needle = arguments[i];
		if (haystack.indexOf(needle) === -1) {
			return false;
		}
	}
	return true;
}

console.log(containsAll("banana","nan"));
