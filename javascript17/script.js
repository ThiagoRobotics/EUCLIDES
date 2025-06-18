const frutas = [
    "Banana",
    "Maçã",
    "Laranja",
    "Morango",
    "Melancia"
]

frutas.sort();

const botao = document.getElementById("botaoMostrar");
const lista = document.getElementById("lista");

botao.addEventListener('click', function(){
    lista.innerHTML = ""; // limpada antes de mostrar a lista de elementos do array

    frutas.forEach(function(fruta) {
        const item = document.createElement("li");
        item.textContent = fruta;
            lista.appendChild(item);
    })
})
