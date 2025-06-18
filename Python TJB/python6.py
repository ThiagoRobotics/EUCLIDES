print("Olá! Vamos fazer o cálculo do seu Índice de Massa Corporal (IMC)!")

def entradaDoUsuario():
    try:
        pesoDoUsuario = float(input("Por favor, insira o seu peso em KG (ex: 54.6): "))
        alturaDoUsuario = float(input("Agora, insira a sua altura em metros (ex: 1.8): "))

        return pesoDoUsuario / (pow(alturaDoUsuario, 2))
    except ValueError:
        print("Entrada inválida! Tente novamente.")
        return entradaDoUsuario()


imcDoUsuario = entradaDoUsuario()

if(imcDoUsuario < 18.5):{
    print("Estas abaixo do peso, com um IMC aproximado de: ", imcDoUsuario, " KG/m²")
}
elif(imcDoUsuario >= 18.5 and imcDoUsuario <= 24.9):{
    print("Estas com um peso normal, com um IMC aproximado de: ", imcDoUsuario, " KG/m²")
}
elif(imcDoUsuario >= 25 and imcDoUsuario <= 29.9):{
    print("Estas acima do peso. Com um IMC aproximado de: ", imcDoUsuario, " KG/m²")
}
elif(imcDoUsuario >= 30):{
    print("Estas obeso. Com um IMC aproximado de: ", imcDoUsuario, " KG/m²")
}