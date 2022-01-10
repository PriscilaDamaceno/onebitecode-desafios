let spaceship = prompt("Digite o nome da nave")
let caractere = prompt("Qual caractere deseja substituir?")
let charnovo = prompt("Por qual deseja substituir?")

let newSpaceship = ""

for(let pos = 0; pos < spaceship.length; pos++){
    if(spaceship[pos] ==caractere){
        newSpaceship += charnovo
}else{
    newSpaceship += spaceship[pos]
}

}
alert("O novo nome da nave é " + newSpaceship)