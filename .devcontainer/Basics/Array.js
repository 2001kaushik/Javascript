const arr1=[1,2,3,4,5]
console.log(arr1);

const arr2=new Array(5,6,7,8,9,10)
console.log(arr2);

// Array Methods

arr1.push(6)           // Element is added at the last
console.log(arr1);
arr1.pop()             // Last element is poped

arr2.unshift(0)        // 0 is added in the First
console.log(arr2);
arr2.shift()           // 0 is removed

console.log(arr1.includes(5));
console.log(arr1.indexOf(4));

const arr3=arr1.join();      // Converts to string
console.log(arr3);
console.log(typeof arr3);

// Slice & Splice

const arr4=new Array(2,3,4,5,6)
console.log("1.",arr4);

const n1=arr4.slice(1,4)
console.log("2.",n1);

const n2=arr4.splice(2,2)
console.log("3.",n2);
console.log("3.",arr4);  // The original Array is Changed. Only those elements are left which is not Spliced

//+++++++++++++++++++ Array Continuation++++++++++++++++++++++++++++++++

const marvel=['Thor', 'Iron Man', 'Wanda', 'Hulk']
const dc=['Super man', 'Bat man', 'Flash']

marvel.push(dc)           // 'dc' is treated as one element
console.log(marvel)
// to find any value in dc we have to write

console.log(marvel[4][2]) // Flash is the o/p

//marvel.concat(dc)
console.log("Using Concat",marvel); // Both Push and Concat perform yhe same function

//const allHero=marvel.concat(dc)

const allHero=[...marvel, ...dc]
console.log("All Heros",allHero);
