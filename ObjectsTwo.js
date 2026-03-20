const TinderUser=new Object()
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
const obj3=Object.assign({},obj1,obj2)
//{} humne iss liye use kiya taaki hum empty obj dikha paye nhi toh saari values obj1 main jayengi
console.log(obj3);
