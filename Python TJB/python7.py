import os

nomeDoUsuario = str(input("Por favor, cadastre o seu nome de usuário: "))
senhaDoUsuario = str(input("Por favor, cadastre a sua senha: "))


os.system('cls')

print("Por favor realize seu login.")
loginUsuario = str(input("Insira o seu nome: "))
loginSenha = str(input("Insira sua senha: "))

if(loginUsuario == nomeDoUsuario & loginSenha == senhaDoUsuario):{
    print("Acesso autorizado.")
} 
elif(loginUsuario == "Elfrida" & loginSenha == "ifc2025"):{
    print("Acesso autorizado como administrador.")
}
else: {
    print("Acesso negado.")
}