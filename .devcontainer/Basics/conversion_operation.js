let score="77";

console.log(typeof score);
console.log(typeof(score));

let valueInNum=Number(score);
console.log(typeof valueInNum);
console.log(valueInNum);        // o/p:- 77
 score="77as";
 valueInNum=Number(score);          // Converted to number
console.log(typeof valueInNum);
console.log(valueInNum);         // o/p:- NaN

score=null;
valueInNum=String(score);
console.log(typeof valueInNum);
console.log(valueInNum);

score=undefined;
valueInNum=String(score);             //converted to String
console.log(typeof valueInNum);
console.log(valueInNum);

score=true;
valueInNum=Number(score);    
console.log(typeof valueInNum);
console.log(valueInNum);         // o/p:- 1

score=1;
valueInNum=Boolean(score);    
console.log(typeof valueInNum);
console.log(valueInNum);      

score="";
valueInNum=Boolean(score);    
console.log(typeof valueInNum);
console.log(valueInNum);   

score="asdf"
valueInNum=Boolean(score);    
console.log(typeof valueInNum);
console.log(valueInNum);   