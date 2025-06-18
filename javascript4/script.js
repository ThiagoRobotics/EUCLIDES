function ligarLampada(){
    document.getElementById("img").src = "images/lampada-ligada.jpeg";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function desligarLampada(){
    document.getElementById("img").src = "images/lampada-desligada.png";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}