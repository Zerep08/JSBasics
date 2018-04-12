const CONST = 5;
console.log(CONST);

//Let
function logScope(){
	var localVar = 2;
	if(true ){
		let localVar = "I'm different";
		console.log("nested localVar", localVar);
		
	}
	console.log("logScope localVar: ", localVar);
}

logScope();
