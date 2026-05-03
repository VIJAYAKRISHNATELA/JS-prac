const name="RAM"
const repoCount=53
//${}---Just a way of writing the code like ${} isnted of +name
console.log(`THe name is ${name} and the n.of repos are ${repoCount}`);

const OName = new String("PAVAN");

console.log(OName[0]);

console.log(OName.length);

const newString=OName.substring(0,2)
console.log(newString);

//Slice also works for the Negative values
//Count from the end of string
let str="javaScript";
console.log(str.slice(-6));

//and since strings are immutable , there wont be any changes in the orinal strign

//Real worls use cases are for extracting the username from email





