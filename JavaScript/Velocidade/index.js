let pilotoNome = prompt("Qual seu nome piloto?")
let velocidade = 0
let novavelocidade = prompt("Qual velocidade você gostaria?")
let confirmVelocidade = confirm("Estamos acelerando para" + novavelocidade + "KM/s")

if (confirmVelocidade) {
    velocidade = novavelocidade
}
if (velocidade <= 0) {
    alert("Nave está parada, aumente a velocidade!")

} else if (velocidade < 40) {
    alert("Muito lento cara! aumenta ai!!!!")
} else if (velocidade < 80) {
    alert("Está razoável, mantenha")
} else if (velocidade < 100) {
    alert("Velocidade alta demais hein! cuidado")
} else {
    alert("Velocidade perigosa, controle automatico forçado")
}
alert ("Piloto: "+pilotoNome + "\nVelocidade: " + velocidade+ "km/s" )

