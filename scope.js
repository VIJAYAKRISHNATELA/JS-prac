// Scope is the region of a program where a variable or function can be accessed.
// A variable declared outside any function/block is global.
//Variables declared with var inside a function are accessible only inside that function.
// Variables declared inside {} are only accessible inside that block.
// let a=100;
// const b=20;
// var c=30;

// console.log(a)
// console.log(b)
// console.log(c)

// var c=300


// if(true){
// let a=100;
// const b=20;
// var c=30;
// }

// console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const username="krishna"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website);

    two()
}

one()


if(true){
    const username="k"
    if(username==="v"){
        const website=" stundent"
        console.log(username+website)
    }
    // console.log(website)
}

// console.log(website)

addTwo(5)
const addTwo=function(num){
    return num+2
}
