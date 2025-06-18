const btnMostrar = document.getElementById("mostrar");
const btnEsconder = document.getElementById("esconder");
const mensagem = document.getElementById("mensagem")

btnMostrar.addEventListener('click', function(){
    mensagem.style.display = "grid"
    //mensagem.style.color = "#0a0"
})
btnEsconder.addEventListener('click', function(){
    mensagem.style.display = "none"
    //mensagem.style.color = "rgb(255, 255, 255)"
})