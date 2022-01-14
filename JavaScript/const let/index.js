const nome = 'Priscila';
const sobrenome = 'Damaceno';
const idade = '27';
const peso = '57';
const alturaEmM = '1.60';
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
console.log('${nome} ${sobrenome} tem + ${idade} + anos, pesa + ${peso}+ kg');
console.log('tem ${alturaEmM} de altura e seu IMC é de:  ${imc} ');
console.log('${nome} nasceu em  ${anoNascimento}.');