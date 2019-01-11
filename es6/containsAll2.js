/**
 * [containsAll2 不定参数]
 * @coolkeychen
 * @DateTime  2019-01-11T10:48:37+0800
 * @param     {[type]}                 haystack [description]
 * @param     {...[type]}              needles  [description]
 * @return    {[type]}                          [description]
 */
function containsAll2(haystack,...needles) {
	console.log(haystack);
	console.log(needles);
	for (var needle of needles) {
		if (haystack.indexOf(needle) === -1) {
			return false;
		}
	}
	return true;
}

console.log(containsAll2('banana','2','nan'));