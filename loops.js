
// for(let i=0;i<=10;i++){
//     const element=i
//     if(element==5){
//         console.log("5 is the best number");
//     }
//     console.log(element)
// }



// for(let i=0;i<=10;i++){
//     console.log(`outer loop: ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`Inner loop value ${j} and inner loop${i}`);
//         console.log(i+'*'+j+'='+i*j)
//     }
// }


// let myArray=["krishna","rahul","chetan"]
// console.log(myArray.length)
// for(let i=0;i<myArray.length;i++){
//     const element=myArray[i];
//     console.log(element)
// }


//break and continue

// for(let  i=0;i<=20;i++){

//     if(i==5){
//         console.log("5 is detected");
//         continue;
//     }
//     console.log(`value of i is ${i}`);
// }

// let index=0;
// while(index<=10){
//     console.log(`Value of index is ${index}`);
//     index=index+2;
// }


//Maps
//maps are uique and it will be i the order which we have defined
const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United Sattes of AMerics")
map.set('Fr',"France")

console.log(map)

for(const {key,value} of map){
    console.log(key,':',va)
}



