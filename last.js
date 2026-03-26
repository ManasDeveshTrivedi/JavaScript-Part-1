const coding=["Java","JS","Ruby","C++"]
// coding.forEach(function (val) {
//     console.log(val);
    
// })

// coding.forEach((val)=> {
//     console.log(val);
    
// })

// const hi=[
//     {
//         langName:"Javascript",
//         langFileName:"js"
//     },
//     {
//         langName:"Python",
//         langFileName:"py"
//     },
//     {
//         langName:"Java",
//         langFileName:"java"
//     }
// ]
// hi.forEach((item)=>{
//     console.log(item.langName);
    
// })

const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((nums)=> nums>4)
// const newNums=myNums.filter((num)=> {
//     num>4 // a block has started so we need to have return statement with it or it will not give any output 
// })
//filter works to sort out and other various operations
// const newNums=myNums.filter((num)=>{
//     return num>4
// })
// const newNums=[]
// console.log(newNums);
// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

// const newNums=myNums.map((num)=>{
//    return num+10
// })
const newNums=myNums
.map((num)=>(num*10))
.map((num)=>(num+10))
.filter((num)=> num>=40)
console.log(newNums);
