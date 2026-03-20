//normally code written is in global scope
// const c=300
// let a=100
// if(true){ /*All the code included inside the if block is the block scope*/
//     let a=10
//     const c=30
//     console.log("Inner:",a);
//     console.log("Inner:",c);
    
// }

// console.log(a);
// console.log(c);

function one(){
    const userName="Manas"
    function two(){
        const userName1="Trivedi"
       // console.log(userName);
    }
    two()
   // console.log(userName)
}
one()
if(true){
    const userName="Manas"
    if(userName === "Manas"){
        const website=" Dev"
        // console.log(userName+website);
    }
}

/* **********Interesting********** */
function addone(num){
    return num+1  
}
console.log(addone(5)); 

const addtwo=function(num){
    return num+2
}
console.log(addtwo(5)); 