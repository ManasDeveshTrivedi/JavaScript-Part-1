//Immediately Invoked Function Expression(IIFE)
 //IIFE main function define bhi ho rha hai call bhi ho rha hai


( function chai(){
    //Named IIFE
    console.log("Namaste1");
 })();

 //(function chai(){...}) function ko expression bana diya
 //() usko immediately call kar diya
 /* ';' semi-colon lagana imp hai kyunki function ko invoke hona toh pata hai but kaha rokna
 hai ye nhi pata toh semi colon termination main kaam aata hai*/

 ( function coffee(){
    console.log("Namaste2");
 })();

(() => {
    console.log("Namaste3");
 })();

((nam) =>{
    nam="Namaste4"
    console.log(nam);  
 })();
 //last ke liye ; zarurat nhi