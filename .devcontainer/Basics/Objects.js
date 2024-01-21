// Singleton :If an object is created from a constructor then it is Singleton or else it may have many instances.

const sym1=Symbol("key1")    //Declaration of a symbol


const obj1={                             // Method to create a object
name:"Subhadip",
"fullname":"Subhadip Dey",
[sym1]: "Dey",
age:21,
email:"subhadip@gamil.com",
isLoggedin:false,
lastLoginDays:["Monday","Thursday"]
}

console.log(obj1.name);        // Wrong process to call the object but we can use it
console.log(obj1["name"]);     // Correct Method to call the object
console.log(obj1.fullname);
console.log(obj1[sym1]);      // calling a Symbol

obj1.email="Kaushik@yahoo.com"   // Changing Email
console.log(obj1["email"]);
//Object.freeze(obj1)
obj1.email="Dey@yahoo.com"      // Again changing the email
console.log("After Freezing ",obj1["email"]);

console.log(obj1);


obj1.func1=function()
{
    console.log(`Hello, ${this.fullname} your age is ${this.age}`)
}

console.log(obj1.func1());


//+++++ Object Creation using constructor-> Singleton 

//const obj2=new Object()       // Sinlgeton--------------------1

const obj2={}                  // Same as  1--------------------2

obj2.ID=12345
obj2.name="Subhadip"
obj2.IsLoggedin=false

console.log(obj2);

const obj3={                    // Nested Object
    email:"Subha@gmail.com",
    fullname:
    {
        Username:
        {
            firstname:"Subahdip",
            lastname: "Dey"
        }
    }
}

console.log(obj3.fullname);
console.log(obj3.fullname.Username.lastname);

//  Merging 2 objects

 //           key   value  key   value
const obj4={ 1 : "apple", 2 : "banana", 3 : "guava" }
const obj5={ 4 : "potato", 5 : "tomato", 6 : "onion" }

//merging
const obj6=Object.assign({},obj4,obj5);
console.log(obj6);


// Destructuring the object

const obj7=
{
    course:"JS",
    courseId:1234,
    courseInstructor:"Subhadip"
}

// way to call (normal)
console.log(obj7.courseInstructor);

//const {courseInstructor}=obj7          // 1st way to Destructure
//console.log(obj7); 

const {courseInstructor:Instructor}=obj7   // 2nd way
console.log(Instructor);

