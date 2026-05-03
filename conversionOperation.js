// let score=false;

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber);

// let isLoggenIn="k"
// let booleanIsLoggedIn=Boolean(isLoggenIn)
// console.log(booleanIsLoggedIn);


//"22"-->22 
//"22abc"->NaN
//true=>1; false->0
//""->false
//"vij"->true

// let someNumber=33
// let StringNumber=String(someNumber)
// console.log(StringNumber)
// console.log(typeof someNumber);


/*Operations in JS */

// let value=3
// let negvalue=-value
// console.log(negvalue)


// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"3");

// console.log(true)

// let num1,num2,num3

// console.log("2">1);
// console.log("02">1)  

// console.log(null>0)//false

//==== strict check

// console.log("2"==2);


/* 
    --summary of datatypes--
    1.primitive -->7 types: String, Number, Boolean, null, undefined, Symbol(a unique and immutable primitive value ), Big Int
    2.non-primitive(Refernce TYpe): Array, Onjects, Functions
 
*/

// //function in js
// const fmyFunction=function(){
//     console.log("JAVASCRIPT");

// }

// //array in js
// const names=["vijay","krishna"]

// //objects in js
// let myObj={
//     name:"V",
//     age:18,
// }

// console.log(typeof fmyFunction)//function we call it object function

// console.log(typeof myObj)//object


//we can check what all types we will get when we use typeof 
/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null*/



//-----------MEMORY----------//

//Stack (primitive), Heap (Non Primitive)


//Stack stores primitive values and function execution contexts
/*Stack uses copy by value*/
/* //Example:

// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// Stack:

// a → 10
// b → 10  (copy)

// After change:
// b → 20
// 
b gets a copy, not the original  */

//Stack is fast and memory in stack is fixed 


//Heap stores reference type(objects,arrays,functions)
// Stack is Dynamic size, Slower than stack,Stores actual data
// Heap uses reference (same memory location)(in heap only the address is copies and not copy of object will be there)








