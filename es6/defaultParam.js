/**
 * [animalSentence 默认参数,停止使用arguments]
 * @coolkeychen
 * @DateTime  2019-01-11T11:21:59+0800
 * @param     {String}                 animal  [description]
 * @param     {String}                 animal2 [description]
 * @return    {[type]}                         [description]
 */
function animalSentence(animal="tigers",animal2="bear") {
	return `Lions and ${animal} and ${animal2}! Oh,my!`;
}

console.log(animalSentence());
console.log(animalSentence("elephants"));
console.log(animalSentence("elephants","whales"));