

//					VARIABLE SCOPE

//what is block scope? Block scope is only supported via Let keyword


/**********************************************************************************
{
	let test = "variable scope of let variable";
	console.log("This was from inside the {}: "+test);
}

//test is scoped to inside hose brackets!

console.log("This was from outside the {}: "+test);
**********************************************************************************/

//lets look at variable scope with functions
/**********************************************************************************
const variableScope= function Outer() {
	var varScope = "I'm in Outer";
	console.log(varScope);
	function Inner() {
		console.log("I'm in inner "+varScope);
	}
}

console.log(variableScope());

**********************************************************************************/

//this works backwards as well
//cant reference a variable that only lives in scope of Inner()
/**********************************************************************************
const variableScope = function Outer(){
	console.log(varScope);
	function Inner(){
		var varScope = "I'm in inner";
		console.log("I'm in inner "+varScope);
	}
}

console.log(variableScope());
**********************************************************************************/






//									HOISTING





//what is hoisting? When declartions hoisted to the top. Keep in mind function expressions are NOT hoisted
//for example this works sort of in that it does not error. 


//this is the same as...
//console.log(hoisted);
//var hoisted = "hello";

//this...
//var hoisted;
//console.log(hoisted);
//hoisted = "hello";

//lets look at function declarations
/*
functionHoisting();

function functionHoisting(){
	console.log("the function hoisted");
}
*/

//but function expressions will not get hoisted and youll have yourself an error!
//uncaught reference error
/*
functionHoisted();

const functionHoisted = function functionHoisting() {
	console.log("the function hoisted");
};
*/




//											CLOSURE


//closure is a referencing a lexically scoped variable OUTSIDE of its lexical scope??How? function in a
//function

function Outer() {
	var magicVariable = "this is magical";
	function Inner (){
		return magicVariable;
	}
	return Inner;
}

var closure = Outer();
var answer = closure();
console.log(answer);

//how do we have access to magicVariable? Closure

//another example

const add = (()=>{
	var counter = 0;
	return ()=>{
		counter++;
		return counter;
	}
})();

console.log(add());
console.log(add());

//how are we incrementing counter when counter lives in the parent scope? Closure











