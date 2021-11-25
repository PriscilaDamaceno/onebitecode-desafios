const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
console.log(data);

let hora = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();

console.log("Hora: "  +  hora  + " Minutos: " + min + " Segundos: " + seg);

let horaPosit = (hora*360/12)+(min*(360/60)/12);
let segPosit = seg*360/60;
let minPosit = +(min*360/60)+ (seg*(360/60)/60);


function excRelogio(){

    horaPosit = horaPosit+(3/360);
    minPosit = minPosit+(6/60);
    segPosit = segPosit+6;

PONTEIROHORA.style.transform = "rotate(" + horaPosit + "deg)";
PONTEIROMINUTO.style.transform = "rotate(" + minPosit + "deg)";
PONTEIROSEGUNDO.style.transform = "rotate(" + segPosit + "deg)";
}
var intervalo = setInterval(excRelogio, 1000);