//Immediately Invoked Function Expressions(IIFE)


function LPU(){
    console.log(`LPU`);
}
LPU()

//Global scope will be polluded sometimes
//so we use IIFE there  by  declaration wont we outside

//This is how we write IIFE
(function LPU(){
    console.log(`LPU`);
})();

// we have to end the IIFE before writing another fucntion













