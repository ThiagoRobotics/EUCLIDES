var cor;

function mudarCor(cor){

    switch(cor){
        case "vermelho":
            document.getElementById("caixa").style.backgroundColor = "rgb(255,0,0)";
            break;
        case "verde":
            document.getElementById("caixa").style.backgroundColor = "rgb(0,255,0)";
            break;
        case "azul":
            document.getElementById("caixa").style.backgroundColor = "rgb(0,0,255)";
            break;
    }

    /*
        if(cor === "vermelho"){
            document.getElementById("caixa").style.backgroundColor = "rgb(255,0,0)";
        } else if (cor === "verde"){
            document.getElementById("caixa").style.backgroundColor = "rgb(0,255,0)";
        } else if (cor === "azul"){
            document.getElementById("caixa").style.backgroundColor = "rgb(0,0,255)";
        }
    */
}