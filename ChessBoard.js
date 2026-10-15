const prompt = require("prompt-sync")();
let userInput = Number(prompt("Enter a number(1-20): "))

while(true){
	if(!isNaN(userInput) && (userInput >= 1 && userInput <= 100)){
		for(let index = 1; index <= userInput; index++){
		
			if(index % 2 == 0){
				console.log("# # # #");
			}
			else{
				console.log(" # # # #");
			}
			}
			break;
		}
		else{
			userInput = Number(prompt("Enter a number(1-100): "))
		}
}
