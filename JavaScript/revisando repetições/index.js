let nomeNave = prompt("Qual é o nome da nave?")
let nomeInvertido = ""

for(let i = nomeNave.length - 1; i >= 0; i -- ){
if(nomeNave[i] == "e"){
    break
}
nomeInvertido += nomeNave[i]
}
alert("O nome original da nave é: "+ nomeNave + "\nNome após alteração: " + nomeInvertido)
