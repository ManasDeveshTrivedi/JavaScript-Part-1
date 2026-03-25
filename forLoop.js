// for (let i = 0; i < 10; i++) {
//     console.log(`Outer Loops Running: ${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner Loops Running: ${j}`)        
//     }
// }
const arr=[4,5,6,9,8,4,3,5]
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==8){
        console.log(`Found ${arr[i]} at index ${i} `);
        continue;
    }
    console.log(`Value of i is ${i}`);
}