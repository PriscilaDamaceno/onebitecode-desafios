let dobraCount = 0
let escolhaOption = ""
let nomeNave = prompt("Digite o nome da nave!")

escolhaOption = prompt("Deseja entrar em dobra espacial? \n1-Sim \n2-Não")

while(escolhaOption == 1){
    dobraCount += 1
escolhaOption = prompt("Deseja realizar a próxima dobra?\n1-Sim \n2-Não")
}alert("Nave: "+nomeNave + "\nQuantidade de dobras: " + "\n" + dobraCount)



