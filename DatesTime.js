const myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);
let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreated=new Date("2023-01-14")
let myCreatedNew=new Date("01-10-2026")
let myTimeStamp=Date.now()
console.log((myTimeStamp));
console.log((myCreated.getTime()));
let newDate=new Date();
newDate.toLocaleString('default',{
    weekday:"long",
})