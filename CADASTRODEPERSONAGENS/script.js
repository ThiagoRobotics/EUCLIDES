const nome = document.getElementById("nome").value;
const classe = document.getElementById("classe").value;
const raca = document.getElementById("raca").value;
const forca = document.getElementById("forca").value;
const destreza = document.getElementById("destreza").value;
const constituicao = document.getElementById("constituicao").value;
const sabedoria = document.getElementById("sabedoria").value;
const inteligencia = document.getElementById("inteligencia").value;
const carisma = document.getElementById("carisma").value;
const imagem = document.getElementById("imagem").value;


const novoPersonagem = {
    nome: nome,
    classe: classe,
    raca: raca,
    forca: Number(forca),
    destreza: Number(destreza),
    constituicao: Number(constituicao),
    sabedoria: Number(sabedoria),
    inteligencia: Number(inteligencia),
    carisma: Number(carisma),
    imagem: imagem
}