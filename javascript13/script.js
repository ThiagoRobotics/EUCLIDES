const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const msg = document.getElementById("msg");

btn1.addEventListener('click', function(){
    msg.textContent = "VOCÊ ERROU!!!!!";
})
btn2.addEventListener('click', function(){
    msg.textContent = "Acertou!!";
})
btn3.addEventListener('click', function(){
    msg.textContent = "VOCÊ ERROU !!";
})