const btn = document.getElementById("tentar");
const input = document.getElementById("input");
const msg = document.getElementById("msg")

btn.addEventListener('click', function(){
    let randomNum = Math.random(10)
    verificarNum(randomNum);
})

function verificarNum(randomNum){
    if(input.value == randomNum){
        msg.textContent = "Você acertou!";
    } else {
        msg.textContent = "Você errou!";
    }
}