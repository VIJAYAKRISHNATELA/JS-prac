// const student=new Object()// it is a singleton object
//A singleton object is an object created using a constructor, ensuring a single instance at that moment.



const student={}//it is a non singleton onjects

student.id=1
student.name="vijay"
student.isLoggedIn=false

console.log(student)


//objects inside object
const cseStudnet={
    email: "vijay@gamil.com",
    fullname: {
        userfullname:{
            firstname:"vijay",
            latname:"krishna"
        }
        
    }
}

console.log(cseStudnet)
console.log(cseStudnet.fullname.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}

// console.log(obj3)

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);





