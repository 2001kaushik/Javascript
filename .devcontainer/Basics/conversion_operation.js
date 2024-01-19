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


// ************************OPERATION**********************************

let value=3;
let negvalue=-value;
console.log(negvalue)
let posvalue=-negvalue;
console.log(posvalue);

console.log(2+2)
console.log(2**3)       //Power
console.log(2/3)

let str1="Subhadip"
let str2= " Dey"
let str3=str1+str2;
console.log(str3);


console.log("1"+2+2)   // o/p: 122
console.log(1+2+"2")   //  o/p: 32