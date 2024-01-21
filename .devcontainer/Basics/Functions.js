function ex(num1, num2)
{
    num3=num1+num2
    return num3
}

const a=ex(4,5)
console.log(a);

// Eg.2 Multiple inputs in a single parameter of a function

function eg2(...num1)          // '...' allows to add element into a single variable in form of a array
{
// 1->   console.log(num1);
 //2->       return num1;
}

//1.   eg2(2,3,4)
//2.  console.log(eg2(2,3,4));

// eg3. using Objects
const user={
    username:"Subhadip",
    QtyItm:6,
    price:200
}

function handleobject(anyobject)     // 'anyobject'  because we can access it from any object that we create
{
    console.log(`User Name: ${anyobject.username} Number of items: ${anyobject.QtyItm} Total Price=${anyobject.price} `);
}

handleobject(user)    //Method 1

//Method 2 Create your own object
handleobject({username:"Kaushik",
QtyItm:600,
price:500})