programa {

    cadeia nome

    funcao inicio(){

        enquanto(verdadeiro){
            escreva("Digite seu nome ou "x" para sair: ")
            leia(nome)
            if(nome == "x" || "X") {
                pare
            }

            escreva("Bem vindo, " + nome + '\n')

        }

        escreva("Até logo!")
    }