 //singleton
 //object Literal
 const  mySym= Symbol("Key1")
 Object.create
 const JsUser={
    name:"Manas",
    [mySym]:"key",
    age:21,
    location:"Lucknow",
    email:"manastrivedi@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
 }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email='manas@hotmail.com';
// Object.freeze(JsUser)//JavaScript mein ek object ko change na hone wala bana deta hai.
// JsUser.email='manas@yahoo.com';
// console.log(JsUser);
//Object ko kabhi bhi freeze nhi krte nhi toh wo error dega
JsUser.greetings=function(){
   console.log("Hello meow")
}
//this ka use karke object ke andar ki jo properties hai wo hume mill jayegi
JsUser.greetingsTwo=function(){
   console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
