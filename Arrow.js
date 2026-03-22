const user={
    userName:"Manas",
    age: 21,
//jab object ke andar function banta hai tab aise funtion likhte hai
    welcomeMsg:function(){
        console.log(`${this.userName}, Welcome`);
        console.log(this);   
    }
}
// console.log(this);
//this is used for current context in a function scope ,function caller 
//“this = jis object ne function ko call kiya hai”
// function chai(){
//     let username="manas"
//     console.log(this.username);
// }
// chai()


// const chai=function(){
//     let username="manas"
//     console.log(this.username);
// }
// chai()

// const chai=()=>{
//     let username="manas"
//     console.log(this.username);
// }
// chai()

// const addTwo= (num1,num2) => {
//     const add=num1+num2
//     console.log(add);    
// }
// addTwo(2,3)

// const addTwo= (num1,num2) => num1+num2    
// const addTwo= (num1,num2) => (num1+num2)    
const addTwo= (num1,num2) => ({user:"Manas"})    
console.log((addTwo(2,3)));