//===================================================================================
//									ES6 AND BEYOND
//===================================================================================


//===================================================================================
//									Array.prototype
//===================================================================================
//reduce
//reduces an array into a single value
//takes in accumulator (required), currentvalue (required), current index (optional), whole array(optional) and initalValue (optional)

const Arr = [1,2,3,4,5];
console.log("Here's original array: "+Arr);
const sum = Arr.reduce((accum, currVal)=>{
	return accum + currVal;
},0);
//the 0 is initial value;

console.log("Here's outcome of reduce: "+sum);

//take a look at different initial value

const sum2 = Arr.reduce((accum, currVal)=>{
	return accum + currVal;
},5);

console.log("Here's outcome of reduce with initial value of 5: "+sum2);


//map
//modify each element of the array somehow
//takes in callback (required) currentvalue (required), index(optional), array(optional), thisArg (optional) - value to use as this
const doubledArr = Arr.map((currVal)=>{
	return 2*currVal;
});

console.log("Here's outcome of map: "+doubledArr);


//filter
// basic use case is to filter out stuff from arrayy!
//arguments: callback (required) , element (required), index(optional), array (optional), thisArg (optional)->value to use as this
const remOdds = Arr.filter((element)=>{
	if(element%2===0){
		return true;
		//return element;
		//correct way is return boolean but works both ways
	}else{
		return false;
	}
});

console.log("Here's outcome of filter: "+remOdds);



//theres are all chainable!!!!!!!! so magical cool array transformations are possible




//forEach
//iterates through array
//callback (required), currentValue (required), index(optional), array(optional), thisArg(optional)
var answerArr = [];
function addToArr(x){
	answerArr = [...answerArr,x];
}

var dogArray = Arr.forEach((currVal)=>{
	addToArr(currVal);
});

console.log("Here's the outcome of foreach: "+answerArr);

//rest parameters and destructuring
//the ... spreads out an array in a list or gathers a list into an array 

//merge array using spread
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

console.log("Here's combining two arrays using gather operator: "+[...arr1,...arr2]);

//destructure array into list
const Max = Math.max(...arr1);
console.log("This is destructuring of array to work with Math.max: "+Max);


//Arrow functions
//concise syntax for function writing

const subtract = (x,y) =>{
	return x-y;
}

//in normal syntax that looks like
const subtract2 = function(x,y){
	return x-y;
}

console.log("Arrow function of subtract: "+subtract(5,3));





