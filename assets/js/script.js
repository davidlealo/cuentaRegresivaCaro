let dia = document.querySelector('#dia');
let hora = document.querySelector('#hora');
let minuto = document.querySelector('#minuto');
let segundo = document.querySelector('#segundo');

let fechaActual = Date.now();
//let fechaActual = new Date().getTime//.toLocaleDateString('es-es', {day:"numeric", month:"short", hour:"numeric", second:"numeric" year:"numeric"});
let fechaMeta = 1659402644;

console.log(fechaActual);
console.log(fechaMeta - fechaActual);