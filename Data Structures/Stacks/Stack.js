//@TODO

//===================================================================================
//									STACKS
//===================================================================================
//a stack is First In Last Out structure
//has two basic functions....pop and push (can have peek)
//array already has pop and push but we'll make our own without using those

class Stack {
	constructor(...payLoad){
		this.payload = [...payLoad];
	}
	get seeStack(){
		return this.payload[0];
	}
	push(val){
		this.payload[0] = [...this.payload[0], val];
		return;
	}
	pop(){
		//this.peek();
		console.log(this.payload);
		this.payload[0] = this.payload[0].splice((this.payload[0].length)-1,1);
		this.payload = [...this.payload[0]];
		
		return;
	}
	static peek(n){
		let peekArr = [...n.payload[0]];
		console.log(peekArr[peekArr.length-1]);
		return;  
	}
	peek(){
		let peekArr = [...this.payload[0]];
		console.log(peekArr[peekArr.length-1]);
		return;
	}

	
}


var testStack = new Stack([1,2,3]);
//console.log(testStack.seeStack);
//Stack.peek(testStack);	//this is via static method
//testStack.peek();		//this is via prototype under the hood

//I think we like the protype way :)

//we'll define the pop and push protype as well
testStack.push(4);
//testStack.peek();
testStack.push(5);
//console.log(testStack.seeStack);
testStack.pop();
//console.log(testStack.seeStack);

