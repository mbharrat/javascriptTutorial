
//ES6 ... ES7 to come
//create a promise to consume
var isHalloween = true;

//promise

var willGetCandy = new Promise(
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

//second promise for chaining demo
//this promise takes in the resolve output
var showFriends = (candy) => {
	return new Promise(
		(resolve, reject)=>{
			var message="Hey buddy I have "+candy.count+" pieces of "+candy.type+".";
			resolve(message);
		}

	);
};



//test promise

var didGetCandy = () => {
	console.log("this is before I asked someone if it's Halloween");
	willGetCandy
	.then(showFriends)
	.then((fulfilled) =>{
		console.log(fulfilled)
	}).catch((error) =>{
		console.log(error.message);
	});
	console.log("this is after I asked and I did stuff while waiting.")
}

didGetCandy();