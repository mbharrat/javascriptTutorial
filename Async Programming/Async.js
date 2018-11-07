

//===================================================================================
//									ASYNC PROGRAMMING
//===================================================================================

//simpel example are timeouts
console.log("first line of code");
setTimeout(()=>console.log("I wait five seconds before happening"),5000);
console.log("third line of code");

//the console looks like this
//'first line of code'
//'third line of code'
//'I wait five seconds before happening'


//amazing article on how this works calback queue, event loop, call stack, webapi
//https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5
//===================================================================================





//===================================================================================
//							HOW DOES AJAX WORK WITH THIS
//===================================================================================

//play with ajax calls to show
//ajax in vanilla JS is uuuugly :) in Jquery you can use jQuery.ajax()
//in React I like to use axios...it all works the same with callback functions
//			EXAMPLE
//		axios.get('<url').
//		.then((resp)=>{
//			...do stuff..	
//		})
//		.then((resp2)=>{
//			...after first then do more stuff...	
//		})
//		.catch((error=>{
//			if you error do something	
//		})); 


//===================================================================================





//===================================================================================
//									ES2017
//===================================================================================

//actual async functions
//	these retrun a promise

//normal func
function addNormal(x,y){
	return x + y;
}

//async
async function addAsync(x,y){
	return x + y;
}

//await pauses code until Promise resolves so for example
async function add(a,b){
	var x = await a();		//waits for a to resolve before going
	var y = await b(x);		//this function waits for b to resolve before going to next line

	return y;

}

