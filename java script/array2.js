const hero = ["spider","ironman","blackwido","thor"]

const dc = ["superman", "flash", "batman"]

console.log(hero);
console.log(dc);
const allheros = hero.concat(dc)
console.log(allheros);

const newheros = [...hero,...dc]
console.log(newheros);

console.log(Array.isArray("histesh"))
console.log(Array.from("histesh"))
console.log(Array.from({name:"vrushabh"})) 
// if array is not define so 16 lines gives result  [] empty array

const score1 = 300;
const score2 = 300;
const score3 = 300;
console.log(Array.of(score1,score2,score3));



