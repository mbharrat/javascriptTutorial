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
