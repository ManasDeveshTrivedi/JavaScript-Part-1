const score= 21
const newScore=new Number(100)
console.log(newScore);
console.log(newScore.toString().length);
console.log(newScore.toFixed(3)); // for decimal place
const otherNum=23.836
console.log(otherNum.toPrecision(3));//for rounding off
const h=100000;
console.log(h.toLocaleString());
console.log(h.toLocaleString('en-IN'));

//****************Maths****************//
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.0));
console.log(Math.floor(4.6));
console.log(Math.min(4,1,2,9));
console.log(Math.floor(Math.random()*10)); 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)))
console.log(Math.floor(Math.random()*(max-min+1))+min)