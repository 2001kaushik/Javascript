const n1=400
console.log(n1);            // Prints only 400

const n2=new Number(500)
console.log(n2);           //  Prints [Number : 500]

console.log(n2.toString.length);
console.log(n2.toFixed(2));        // to 2 decinal points

const n3=123.987
console.log(n3.toPrecision(4));
console.log(n3.toPrecision(2));
console.log(n3.toPrecision(3));

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));      // Without en-IN it will display in US format
                                                    // in indian format o/p:- 1,00,00,000
//++++++++++++++++++++++++++++++++  MATH  +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-0.66))
console.log(Math.max(3,4,5,7,1))
console.log(Math.ceil(1.66))
console.log(Math.floor(1.66))
console.log(Math.round(-0.66))

console.log(Math.random())        // Random value b/w 0 & 1