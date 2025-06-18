var contador = 0;

function atualizarContador() {
    document.getElementById("count").textContent = contador;
}
function incrementar() {
    contador++;
    atualizarContador();
}
function decrementar() {
    contador--;
    atualizarContador();
}

document.addEventListener("keydown", function(teclado){
    if(teclado.key === "+"){
        incrementar();
    } else if(teclado.key === "-"){
        decrementar();
    }
});
