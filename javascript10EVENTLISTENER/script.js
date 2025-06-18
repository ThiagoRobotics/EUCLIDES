const btnVermelho = document.getElementById("vermelho");
const btnVerde = document.getElementById("verde");
const btnAzul = document.getElementById("azul");

btnVermelho.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
})

btnVerde.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

btnAzul.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
})