/*
Primitive:-
7 types:String,Number,Boolean,null,undefined,Symbol,bigint
*/
let id=Symbol("123")
let anotherId=Symbol("123")
console.log(id==anotherId);

const hero=["batman","superman","ironman","spiderman"]
let myObj={
    Name: "Manas",
    age: 22,
}

const myFunction= function(){// Object in JS
    console.log('Hello World');
}
console.log(typeof id);

let myName='Manas'
let anotherName=myName
anotherName='Dev' // new value is stored earlier one is not used
console.log(myName);
console.log(anotherName);

let userOne={
    email: 'manas@balleballe.com',
    upi:'user@ybl'
}

let userTwo=userOne

userTwo.email="manas@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

/*
Reference(Non Primitive):Array, Objects, Functions
*/