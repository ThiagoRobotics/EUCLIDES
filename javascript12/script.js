const btn = document.getElementById("clicar");
const msg = document.getElementById("quantidade");
var numClick = 0;


btn.addEventListener('click', function(){
    ++numClick;
    document.getElementById("quantidade").textContent = "Você clicou " + numClick + " vezes.";
})