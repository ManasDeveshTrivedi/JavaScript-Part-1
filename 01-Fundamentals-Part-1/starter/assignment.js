// let country='India';
// let continent='Asia';
// let population='1.5 billion';
// console.log(country);
// console.log(continent);
// console.log(population);

//Coding challenge 1 
// const markWt=95;
// const markHt=1.88; 
// const johnWt=85;
// const johnHt=1.76;
// const markBMI=markWt/(markHt*markHt);
// const johnBMI=johnWt/(johnHt*johnHt);
// const markHigherBMI=markBMI>johnBMI;
// console.log(markHigherBMI)

//coding challenge 2
// const markWt=95;
// const markHt=1.88; 
// const johnWt=85;
// const johnHt=1.76;
// const markBMI=markWt/(markHt*markHt);
// const johnBMI=johnWt/(johnHt*johnHt);
// if(markBMI>johnBMI){
//     console.log(`Mark's BMI is higher than John's!`);
// }else{
//     console.log(`John's BMI is higher than Mark's!`);
// }

//coding challenge 3
// const dolphin1=96;
// const dolphin2=108;
// const dolphin3=89;

// const koalas1=88;
// const koalas2=91;
// const koalas3=110;
// const avgDolphin=(dolphin1+dolphin2+dolphin3)/3.0;
// const avgKoalas=(koalas1+koalas2+koalas3)/3.0;
// if(avgDolphin>avgKoalas){
//     console.log(`Dolphin won`);
// }
// else if(avgDolphin<avgKoalas){
//     console.log(`Koalas won`);
// }
// else{
//     console.log(`Draw`);
// }

//Coding Challenge 4
const bill=40;
const tip=bill>50 && bill<=300 ? (bill*0.15):(bill*0.20);
console.log(`The bill was ${bill},the tip was ${tip},and the total value ${bill+tip}`);