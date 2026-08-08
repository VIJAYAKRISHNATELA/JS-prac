const form=document.querySelector("form")


form.addEventListener("submit", function(event){
  event.preventDefault();

  const height=parseInt(document.querySelector("#Height").value);
const weight=parseInt(document.querySelector("#Weight").value);


console.log(height);
console.log(weight);

if(height=="" || height<0 || isNaN(height)){
        results.innerHTML="Please enter valid height";
}
else if(weight=="" || weight<0 || isNaN(weight)){
  results.innerHTML="Please enter a valid weight";
}
else{

  const bmi=(weight/((height*height)/10000)).toFixed(2);

  results.innerHTML=`<span>YOUR BMI IS ${bmi}</span>`
  
}})



