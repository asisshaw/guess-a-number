// create varabile and constant
let input = document.querySelector("input");
let showBtn = document.querySelector(".hide");
const submitBtn = document.querySelector(".submit");
const textFiled=document.querySelector(".text");
const storeValue=document.querySelector(".value");
const formFild=document.querySelector("form")
let arr=[];
// let's create random numbers..
let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
//button in addEventListener
formFild.addEventListener("click", () => {
    const inputFiled = parseInt(input.value);
    if(input.value===""){
        
        textFiled.innerHTML="<h3>Please give a Value</h3>"
        textFiled.style.color="red";
        storeValue.innerHTML="";
    }
    else if (randomNum === inputFiled) {
        // console.log("congras");
        textFiled.innerHTML="<h1>Congratulation</h1>"
        arr.push(inputFiled);
        storeValue.innerHTML=`you guess ${arr}`;
        textFiled.style.color=""
        input.value = "";
        showBtn.style.cursor= 'pointer';
    } else if (randomNum > inputFiled) {
        // console.log("to high");
        textFiled.innerHTML="<h3>To high</h3>"
        arr.push(inputFiled);
        storeValue.innerHTML=`you guess ${arr}`;
        textFiled.style.color=""
        input.value = "";
        
    } else {
        textFiled.innerHTML="<h3>To low</h3>"
        arr.push(inputFiled);
        storeValue.innerHTML=`you guess ${arr}`;
        textFiled.style.color=""
    // console.log("to Low");
    input.value = "";
  }
}); 

