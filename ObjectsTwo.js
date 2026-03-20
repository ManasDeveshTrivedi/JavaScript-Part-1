//const TinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Moye Moye"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Manas",
            lastname:"Trivedi"
        }
    }
}
// console.log((regularUser.fullname));
// console.log((regularUser.fullname.userfullname));
// console.log((regularUser.fullname.userfullname.firstname));
// console.log((regularUser.fullname.userfullname.lastname));

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
//Assign ke through hum multiple objects assign kar skte hai
//{} humne iss liye use kiya taaki hum empty obj dikha paye nhi toh saari values obj1 main jayengi
const obj3={...obj1,...obj2}
//console.log(obj3);
//Array main multiple objects ho skte hai
const users=[
    {
        mail:"manas@gmail.in"
    },
    {
        Age:21
    },
    {
        Number:8303913317
    }
]
//console.log(users[1]);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//all the keys created inside tinderUser are shown
// console.log(Object.values(tinderUser));//all the values for the key
// console.log(Object.entries(tinderUser));//key: value format entries
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    courseName:"JS by chai",
    price:'999',
    courseInstructor:'Hitesh'
}
const{courseInstructor: ins}=course//destructuring of object
console.log(ins);
// const navbar= ({courseName}) =>{
//this is also destructuring of object
// }
// { /*Example for JSON*/
//     "name":"Manas",
//     "age":"21",
//     "hobby":"nothing,sleep"
// }