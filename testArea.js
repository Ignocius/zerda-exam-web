var toDostring = 'asdasd kiskutya délas dkjél lobab élasdjélaskjd alma';
var foundWordsCount = 0;
let words = ["kiscica", "kiskutya", "alma", "lobab"];
for(let w in words) {
	var word = words[w];
	console.log(word)
	if(vizsgalandostring.indexOf(word) !== -1) {
		foundWordsCount++;
	}
}
console.log(foundWordsCount);
