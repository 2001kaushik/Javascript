const name="Subhadip";
const repocount=80;

//console.log("My name is "+name+"My repo count is "+repocount); //  Not to use this manner

console.log(`My name is ${name} and my repo count is ${repocount}`); // Correct and new method

// Declear a string

const gmaename=new String('Kaushik')

console.log(`Gamename at 0 index is ${gmaename[0]}`);
console.log(gmaename.__proto__);      // O/p: Object
console.log(gmaename.toUpperCase());
console.log(gmaename.length);
console.log(gmaename.charAt(4));
console.log(gmaename.indexOf('u'));

const subS=gmaename.substring(0,5);
console.log(subS);

const Slic=gmaename.slice(0,5);
console.log(Slic);

const Sl=gmaename.slice(-6,5);
console.log(Sl); 
 
// Explore more at mdn web docs

const s1="Kaushik Kumar"
console.log(s1.replace('Kumar','Dey'));
console.log(s1.includes('Dey'));         // O/p: False because Primitive data types use stack memory; Original data is not changed 
console.log(s1.includes('Kumar'));       // O/p: True
console.log(s1.split());                 // forms an array
