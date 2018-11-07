
//ES6 ... ES7 to come
//create a promise to consume
var isHalloween = true;

//promise
function willGetCandy(){
	return new Promise(
	(resolve, reject) =>{
		if(isHalloween) {
			var candy = {
				count: '100',
				type: 'chocolate'
			};

			resolve(candy);
		}else{
			var reason = new Error("Silly, it's not Halloween!")
			reject(reason);
		}
	}


);
}

//second promise for chaining demo
//this promise takes in the resolve output
function showFriends (candy){
	return new Promise(
		(resolve, reject)=>{
			var message="Hey buddy I have "+candy.count+" pieces of "+candy.type+".";
			resolve(message);
		}

	);
};





