let question=document.getElementById("question")
let input = document.getElementById("answer");

let button = document.getElementById("checkBtn");

let result = document.getElementById("result");
let num1=Math.floor(Math.random()*10);
let num2=Math.floor(Math.random()*10);
let correctanswer=num1+num2;
question.textContent=`${num1} + ${num2}`

button.addEventListener("click",function(){
    let userAnswer = Number(input.value);
    if (userAnswer===correctanswer){
        result.textContent="Verified";
        result.style.color="green";
    }else{
        result.textContent="YOU entered wrong captcha";
        result.style.color="red";
    }

});