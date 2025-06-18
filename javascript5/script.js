
function calcular(calc){

    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    
    var resultado;
    
    
    switch(calc){
        case "soma":
            {
                resultado = num1 + num2;
                break;
            }
        case "subtrair":
            {
                resultado = num1 - num2;
                break;
            }
        case "dividir":
            {
                if(num1 == 0 || num2 == 0){
                    window.alert("Divisão por 0 é gay!");
                    return;
                }
                resultado = num1 / num2;
                break;
            }
        case "multiplicar":
            {   
                resultado = num1 * num2;
                break;
            }
        default:
            {
                window.alert("Nada ver a operação, o que diabos você fez?");
            }
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
    window.alert(resultado);
}