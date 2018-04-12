function biggestFraction(){

	if(a>b){
		console.log("a: " + a);	
	}else{
		console.log("b"+ b);
	}
}

var a = 3/4;
var b = 5/7;

biggestFraction();

//Anonymous  functions

var a = 5/7;
var b = 18/27;

var theBiggest = (function(a,b){
	var result;
	a>b ? result = ["a",a]:result =["b",b];
	return result;
})(1/4,1/2)

console.log(theBiggest);