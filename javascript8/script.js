function verificarData(){
    data = new Date();

    console.log(data.getHours()); // getYear() getFullYear() getDate()

    if(data.getHours() <= 12 && data.getHours() >= 6){
        document.getElementById("resultado").textContent = "Bom dia! são " + data.getHours() + " horas da manhã.";
    } else if (data.getHours() > 12 && data.getHours() <= 18){
        document.getElementById("resultado").textContent = "Boa tarde! são " + data.getHours() + " horas da tarde.";
    } else {
        document.getElementById("resultado").textContent = "Boa noite! são " + data.getHours() + " horas da noite.";
    }
}