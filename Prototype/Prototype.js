//							Prototype


//all functions get initialized with prototype object
//inheritance model called "differential inheritance"
//		this means children have invisble link back to parent OBJ

function Person(firstName,lastName) {
	this.FirstName=firstName;
	this.LastName=lastName;
	this.sayName = ()=>{
		console.log(this.FirstName+" "+this.LastName);
	};
};
//no self referencing with arrow functions so it goes up scope 
//to look for this and in this context finds nothing
/*Person.prototype.backwardsName = ()=>{
	return console.log(this.LastName+" "+this.FirstName);
};*/

Person.prototype.backwardsName = function(){
	console.log(this.LastName+" "+this.FirstName);
};
var Mike = new Person();
Mike.FirstName = "Mike";
Mike.LastName = "Bharrat";
console.log(Mike.FirstName);

Mike.sayName();
Mike.backwardsName();

//is this new backwardsName on all Person now?

var Devina = new Person('Devina', 'Bharrat');
console.log(Devina);
Devina.backwardsName();

//subclassing

function Child(firstname, lastname, age){
	this.age = age;
};

//use Object.create() to create object that inherits from another

Child.prototype = Object.create(Person.prototype);

var Ria = new Child(2);
console.log(Ria);
Ria.FirstName ="Ria";
Ria.LastName = "Bharrat" ;
Ria.backwardsName();

//this shows protoype so shows Person
console.log(Ria.__proto__);




