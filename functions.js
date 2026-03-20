function name(){
    console.log("Manas");
}
function age(){
    const Age="21"
    return Age
}
//console.log("Age is: ",age());
function hobby(){
    console.log("Sleep");
}
function addTwoNumber(num1,num2/* parameters*/){
    // const res=num1+num2
    // return res
    return num1+num2    
}
const result=addTwoNumber(16,32)
// console.log("Result is: ",result);
//addTwoNumber(1,"4")//14

// function loginMsg(username){
//     if(username === undefined){
//         console.log("please enter an username");
//         return
//     }
//     return `${username} just logged in`
// }
function loginMsg(username="Dev"){
    if(username === undefined){
        console.log("please enter an username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginMsg("Manas"));
//console.log(loginMsg());
//{...num} these "..." are known as rest and spread operator

function numbers(val1,val2,num){
    return{
    val1,
    val2,
    num}
}
function anyOne(Obj){
    return `Value 1 is ${Obj.val1} & Value 2 is ${Obj.val2} the number is ${Obj.num}`
}
const res=numbers(10,50,100)
console.log(anyOne(res));


const newArray=[20,30,40,50,60]
function location(getnewArray){
    return getnewArray[2]
}
console.log(location(newArray));
