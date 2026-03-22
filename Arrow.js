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