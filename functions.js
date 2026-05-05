// function addTwoNumbers(number1,Number2){
// console.log(number1+Number2)
// }

// addTwoNumbers(9,1)

function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}

const result=addTwoNumbers(5,5)

// console.log("Result: ",result)


function loginUserMessage(username="k"){
    if(!username){
        console.log("enter the user name")
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("krishna"))


function calculateCartPrice(...num1){
    return num1

}

// console.log(calculateCartPrice(3,4,9,300))


// const user={
//     username:"vijay",
//     age:19
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
    username:"krishna",
    age:19
})


const myArray=[200,435,23]

function returnsecondval(getArray){
    return getArray[0]
}

// console.log(returnsecondval(myArray));















