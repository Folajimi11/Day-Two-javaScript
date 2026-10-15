const prompt = require("prompt-sync")();

const userInput = prompt("Enter Target: ")
let array = [2,7,8,5]

for(let index = 0; index < array.length; index++){
	for(let count = index + 1; count < array.length; count++){
		if(array[index] + array[count] == userInput){
			let totalIndex = [index, count]
			console.log(totalIndex)
		}
		break;
	}
}
