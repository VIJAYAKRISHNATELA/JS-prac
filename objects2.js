// const student=new Object()// it is a singleton object
//A singleton object is an object created using a constructor, ensuring a single instance at that moment.



const student={}//it is a non singleton onjects

student.id=1
student.name="vijay"
student.isLoggedIn=false

// console.log(student)


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

// console.log(cseStudnet)
// console.log(cseStudnet.fullname.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


// const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2)

// const obj3= Object.assign({}, obj1,obj2)//It combines evry vakue from the two object {}..(Object.assign())
// console.log(obj3)

// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

// const obj3={...obj1, ...obj2}//It comibes all the values from the 2 objects it wrokks like the amov ,jus the syntax difference
// console.log(obj3);


//databse vaues usally comes like the array of objects

// ex:

const users=[
    {

    },
    {
        id: 1,
        email: "vijay@gmail.com"
    },
]

users[0].email
console.log(student);

console.log(Object.keys(student));//we can get the keys of the object using this method in a array format 


console.log(Object.values(student))//from here we can get the values of the object using this method in array format
console.log(Object.entries(student))//we can get the evry key value in an array format


 console.log(student.hasOwnProperty('isLoggedIn'))//checks whether this projerty is there ot not


//Destructuring
// taking values out of an object (or array) and putting them into variables easily.
const course ={
    coursename: "Js in Hindi",
    price:"999",
    courseInstructor:"krishna"
}

// course.courseInstructor

const {courseInstructor : instructor}=course// we can jsut assign the name of our wish after : 

console.log(instructor);

//Destructing of the object
const navbar = ({company}) => {
console.log(company)
}

navbar(company="company") 


[
    {},
    {},
    {}
]


