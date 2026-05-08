// const accountId=83724
// let accountemail="javascript@gmmaill.com"
// var accountpassword="12345678"
// accountCity="Delhi";
// let accountState;

// // accountId=2//not allowed

// accountEmail="krishana@gmail.com"
// accountpassword="294378";
// accountCity="Bengaluru"

// console.log(accountId);

// /* Never use var beause of issue in block scope and fucntional scope*/


// console.table([accountEmail,accountpassword,accountCity,accountState])



//---------------PRACTICE-----------------
// ✅ 1️⃣ variables.js
// Task 1 — Student Info

// const name="DIAZ";
// let age=22;
// let college="LPU";
// isStudent=true;

// console.log(`${name} is ${age} years old and studying in ${college} and she is a student${isStudent}`);

// Task 2 — Swap Two Numbers

// let a=10;
// let b=20;

// a=a+b;
// b=a-b;
// a=a-b;

// console.log(a);
// console.log(b);


//Task 3 — Simple Calculator

// let c=50;
// let d=100;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


// ✅ 2️⃣ dataTypes.js


// const s="vijay";
// const n=null;
// let k;
// const v=10;
// ishuman=true;

// console.log(typeof v)
// console.log(typeof(s))

// console.log(n)
// console.log(typeof ishuman)
// console.log(typeof k)



// Task 2
// Create an object:
// const student={
//     name:"rahul",
//     age:22
// }

// console.log(student.name,student.age)


// ✅ 3️⃣ conversionOperation.js
// Task 1

// let l=10;
// l="10";
// let s="89098"
// s=Number(s)
// isteacher=true
// isteacher=Number(isteacher)

// console.log (typeof s)
// console.log(typeof l)
// console.log(typeof isteacher)


// Task 2

// let score="500"
// score=Number(score)
// score+=50
// console.log(score)

// ✅ 4️⃣ strings.js/

// Task 1 — Reverse String

// let k="krishna";

// for(let i=k.length-1;i>=0;i--){
//     console.log(k[i]);
// }



//Task 2 — Count Vowels

// let s="Ramesh";
// let count=0;
// for(let i=0;i<s.length;i++){
//     if(s[i]=='a' || s[i]=='e' || s[i]=='i' ||
//         s[i]=='o' || s[i]=='u'
//     ){
//         count++;
//     }
// }
// console.log(count)


// Task 3 — Palindrome Check

// let str="madam";
// let rev="";
// let pali=str;

// for(let i=str.length-1;i>=0;i--){
//     rev+=str[i];
// }
// if(rev==str){
//     console.log("Yes it is a palinfrome");
// }
// else{
//     console.log("not a palinrome")
// }

//Task 4 Capitalize first letter.

// let str="Ankit";
// let capitalize=str.charAt().toUpperCase()+str.slice(1)
// console.log(capitalize)


// ✅ 5️⃣ numsandmath.js

// Task 1 — Random Number Generator
// Generate numbers between 1–100.

// n=100;
// let randomnumber=0;
// for(let i=0;i<=100;i++){
//    randomnumber= Math.random()*100;
// }
// console.log(randomnumber)


// Task 2 — Dice Game


// let n=6;
// let randomdicevalue;
// for(let i=1;i<=n;i++){
//     randomdicevalue=Math.random()*100;
// }
// console.log(randomdicevalue)

// Task 3 — BMI Calculator

// let BMI
// let weight=70;
// let heightincm=175;
// let heightinm=heightincm/100

// BMI=weight/(heightinm)*(heightinm)

// console.log(BMI)



// let dice =Math.floor(Math.random()*6)+1;
// console.log(dice)


// let weightinKg=50;
// let heightincm=180;
// let heightinm=heightincm/100;
// let bmi=weightinKg/(heightinm*heightinm);
// console.log(bmi)



// Task 1 — Sum of Array

// let myArr=[10,20,30,40]
// let sum=0;

// for(let i=0;i<myArr.length;i++){
//     sum+=myArr[i];
// }
// console.log(sum)


// ✅ Task 2 — Find Largest Number

// let myArr=[4,7,1,9,2]
// let largestnumber=myArr[0]

// for(let i=0;i<myArr.length;i++){
//     if(myArr[i]>largestnumber){
//         largestnumber=myArr[i];
//     }    
// }

// console.log(largestnumber)

// ✅ Task 3 — Count Even Numbers
// let myArr=[1,2,3,4,5,6];
// let count=0;
// for(let i=0;i<myArr.length;i++){
//         if(myArr[i]%2==0){
//             count++;
//         }
// }
// console.log(count)

// ✅ Task 4 — Reverse Array

// let myArr=[1,2,3,4];
// for(let i=myArr.length-1;i>=0;i--){
//     console.log(myArr[i])

// }



const states=["Andhra Pradesh","Telangana","TamilNadu"];
const city=["vijayawada","Hyderabad","chennai"];


// states.push(city)

// console.log(states)

// const allinfo=states.concat(city)
// console.log(allinfo)


const allinfo=[...states,...city]
console.log(allinfo)
