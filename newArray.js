const marvel=['Ironman','Captain America','Spiderman']
const DC=['batman','superman','flash']
// marvel.push(DC)
// console.log(marvel);
// console.log(marvel[3][1]);
// const hero=marvel.concat(DC)
// console.log(hero);
const all_hero=[...marvel,...DC]
console.log(all_hero);
const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another=another.flat(Infinity)
console.log(real_another);
