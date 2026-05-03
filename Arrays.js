// const mySubs=["DSA","DEV","CN",1]
// // console.log(mySubs)

// const myArr2=new Array(1,2,34)

// console.log(mySubs[0]);


// //we can resize the array in js
// //

// //Arrry Methods

// // push:
// myArr2.push(10)
// myArr2.push(50)
// console.log(myArr2)
// //POP:
// myArr2.pop()
// console.log(myArr2)

// //will insert in the start of the array its a time consuming process cause we have to change the every arrays
// myArr2.unshift(9)
// console.log(myArr2)

// //removes the first element in the array
// myArr2.shift()
// console.log(myArr2)


//Slice, Splice
// console.log("A", myArr2);

// const myn1=myArr2.slice(1,3)

// console.log(myn1);
// console.log("B ",myArr2)


//when we use slice 

//slice() returns a portion of an array/string without modifying the original
//plice() modifies the original array by adding, removing, or replacing elements.



let arr=[1,2,3,4,5,6];
let result=arr.slice(1,4)

console.log(arr)
console.log(result)

let result2=arr.splice(1,4);
console.log(arr);
console.log(result2);

