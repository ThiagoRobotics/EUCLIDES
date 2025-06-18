numeroDeProdutos = int(input("Qual é a quantidade de produtos?: "))

nomeDosProdutos = [numeroDeProdutos]
produtos = [numeroDeProdutos]
produtosSomados = 0

for i in range(numeroDeProdutos):
    produtoPreco = int(input(f"Entre o valor do produto {i+1} : "))
    nomeProduto = str(input(f"Qual o nome do produto{i+1} : "))

    produtos.append(produtoPreco)
    nomeDosProdutos.append(nomeProduto)

    produtosSomados += produtoPreco



print("Lista de nomes: ", nomeDosProdutos)
print("Preço de cada um em ordem: ", produtos)
print("Valor total em R$: ", produtosSomados)