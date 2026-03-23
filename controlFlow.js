//if

// if(2 == "2"){
//     console.log("True");
// }

/* in "var" there is a problem of scope that even if declared inside 
an "if" it still can be accessed by outer variable in local scope*/ 

// if(true){
//     var power="fly"
//     console.log(`Can : ${power}`);
// }
// console.log(power);//accessed outside local scope in global scope

 const user=true
 const debit=true
const credit=false

 if(user && debit){ //and operator
    console.log("Allow");
 }

if(user || credit){// or operator
    console.log(("Gareeb"));
    
}