let distanceInLY = prompt("Digite a distância em anos-luz");
let chosenOption = prompt("Para qual unidade deseja converter?\n1-Parsec(pc)\n2-Unidade Astronomica(AU)\n3-Quilômetros(km)\n\n(DIGITE O NÚMERO DESEJADO!)");
let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break

    case "2":
        chosenUnity = "Unidade Astronomica"
        convertedDistance = distanceInLY * 63241.1
        break

    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break


    default:
        chosenUnity = "Unidade não identificada!"
        convertedDistance = "Conversão fora do escopo!"

}
alert("Distância em anos-luz: " + distanceInLY + "\n" + chosenUnity + ": " + convertedDistance);

