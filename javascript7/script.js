function verificar(){
    const num = Number(document.getElementById('num').value);
    
    if(num % 2 == 0 && num >= 0){
        document.getElementById("resultado").textContent = "Par e positivo";
    } else if (num % 2 == 0 && num < 0) {
        document.getElementById("resultado").textContent = "Par e negativo";
    } else if (!(num % 2 == 0) && num < 0) {
        document.getElementById("resultado").textContent = "Impar e negativo";
    } else if (!(num % 2 == 0) && num >= 0) {
        document.getElementById("resultado").textContent = "Impar e positivo";
    }
}