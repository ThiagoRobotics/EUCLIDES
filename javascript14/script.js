const escreva = document.getElementById("escreva");
const msg = document.getElementById("carac");

escreva.addEventListener('input', function(){
    msg.innerText = escreva.value.length;
})