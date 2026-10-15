const prompt = require("prompt-sync")();
const askNumber = Number(prompt("Tables of: "))

while(true){
		if(Number.isNaN(askNumber)){
				console.log("Invalid input, Enter a valid input: ");
				const askNumber = Number(prompt("Invalid input, Enter a valid input: "))
				for(let index = 1; index <= 12; index++){
					const multi = askNumber * index;
					console.log(askNumber + " X " + index + " = " + multi);
				}	
				break;
		}
		else{
			for(let index = 1; index <= 12; index++){
				const multi = askNumber * index;
				console.log(askNumber + " X " + index + " = " + multi);
			}
		break;	
		}
}


