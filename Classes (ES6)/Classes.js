
//===================================================================================
//				quick chat about THIS
//		
//references the Object that is executing the current function
//===================================================================================


//===================================================================================
//								
//						
//							CLASSES
//
//
//this is still prototype based inheritance with syntatic sugah! 
//===================================================================================




//===================================================================================
//				PROTOTYPE EXAMPLE OF CLASS
//===================================================================================

function User(name){
	this.name = name;
}

User.prototype.sayHi = function(){
	console.log("Hi, my name is "+this.name+".");
}
//for func new does not have to be called but I do it anyway
let Mike = new User("Mike");
Mike.sayHi();
//===================================================================================




//===================================================================================
//							now here is the CLASS way
//===================================================================================
////classes ALWAYS use strict
//classes are enumerable
//if there is no constructor then an empty constructor is generated

class User2 {
	constructor(name){
		this.name = name;	//this refers to the class
	}
	

	//this is a method on its prototype
	get name(){		//GETTER
		return this.newName; //this references User2
	}

	//method on prototype
	set name(value) {		//SETTER
	    if (value.length < 4) {
	      alert("Name is too short.");
	      return;
	    }

    	this.newName = value;
	}

	sayBye(){
		console.log("Bye, my name is "+this.name+".")
	}

	//static methods are functions on class itself
	static getFullName(n){
		console.log("Hi my name is "+n.name+" and this is a static method.");
		return;
		
	}
}

let Devina = new User2("Devina Subedar");	//for class new HAS to be called
Devina.sayBye();
console.log("Before setter: "+Devina.name); //check name before setter
Devina.name = "Devina Bharrat";
console.log("After setter: "+Devina.name);		//check name after setter

User2.getFullName(Devina);	//calling static method
console.log(Devina);	//look at the object

//===================================================================================




//===================================================================================																				
//																					
//								SUBCLASSING											
//																																									
//===================================================================================

class Child extends User2 {			//extends is the keywords to create a subclass hello React ... class Button extends Component{}
		sayBye(){
			console.log("Bye wah wah wah: "+this.name);
			return;
		}					
}

var Ria = new Child("Ria Bharrat");
Ria.sayBye();	//this is childs sayBye();
console.log(Ria); 	//look at Ria object

class Tween extends User2 {
	sayBye(){
		return super.sayBye();	//returning super.<nameofmethod> returns the parents method
	}
}

var Ian = new Tween("Ian Bharrat");
Ian.sayBye();
console.log(Ian);







