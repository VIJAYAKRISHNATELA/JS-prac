//singleton

//object literals


//Here we can keep key values my our own

const mySym=Symbol("key1")

const JsUser={
    name:"krish",
    "full name":"vijay krishna",
    [mySym]:"myKjjjjey1",///[]this is how we should include the symbol
    age:20,
    location:"Delhi",
    email:"krish@email.com",
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// Object.freeze() is used to make an object immutable, meaning you cannot add, delete, or modify its properties.


// Object.freeze(JsUser)
JsUser.age=40//it will not change to  40 cause we freezed JsUser in here
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hyyy")
}

console.log(JsUser.greeting())
// Note: if we use JsUser.greeting() it will return the js value in the function ex:HYY, if we mention JsUser.greeting we will get the referece of the function


JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo())





















