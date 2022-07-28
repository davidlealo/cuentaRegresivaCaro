//Un día en milisegundos
let unDia = 1000 * 60 * 60 * 24;

//Una hora en milisegundos
let unaHora = 1000 * 60 * 60;

//Un minuto en milisegundos
let unMinuto = 1000 * 60;


//Fecha de hoy
let fechaHoy = new Date();

//Fecha Caro
let fechaCuenta = new Date("2022/08/31");


window.onload = function(){
    setTimeout(function(){
      
        //Imprimir días cuenta regresiva
let dia = document.querySelector('#dia');
let restaDias = parseInt((fechaCuenta - fechaHoy) / unDia);
dia.innerHTML = restaDias;

//Imprimir horas cuenta regresiva
let hora = document.querySelector('#hora');
let horaRegresiva = new Date("2022/08/31").getHours();
console.log(typeof (horaRegresiva))
let horaActual = Number(new Date().getHours());
console.log(typeof (horaActual))
let resultadoHora = restaDias % 24;

console.log(`Hora de la cuenta regresiva es ${horaRegresiva} y a resta es ${resultadoHora}`)

hora.innerHTML = resultadoHora;

//Imprimir minutos cuenta regresiva
let minuto = document.querySelector('#minuto');
let restaMinutos = parseInt((fechaCuenta - fechaHoy) / unMinuto);
minuto.innerHTML = restaMinutos % 60;

//Imprimir segundos cuenta regresiva
let segundo = document.querySelector('#segundo');
let restaSegundos = parseInt((fechaCuenta - fechaHoy) / 1000);
segundo.innerHTML = restaSegundos % 60;
        
    }, 1000);
   };


/*

PRUEBA y ERROR ANTERIOR:::::::
::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::

let fechaActual = Date.now();
let stringFechaActual = new Date().toLocaleDateString();
let fechaCaro = new Date(08/01/2022);
//let fechaMeta = 1659402644;

console.log((fechaCaro - fechaHoy)/unDia);
console.log((fechaCaro - fechaHoy));
console.log((fechaCaro - fechaHoy/unDia))
let = option1 = new Date();
let = option2 = new Date({year: "numeric", month: "numeric", day: "numeric", hours: "numeric", minutes: "numeric", seconds: "numeric", milliseconds: "numeric"});
let = option3 = new Date({milliseconds: "numeric"});
let = option4 = new Date("2022/08/31");
console.log("Ahora el resultado:")
console.log(`El resultado es ${parseInt((option4 - option1)/unDia)}`)

console.log(`Option1 es ${option1}`);
console.log(`Option2 es ${option2}`);
console.log(`Option3 es ${option3}`);
console.log(`Option4 es ${option4}`);



console.log(`La fecha actual es ${fechaActual}`);
console.log(`La fecha hoy es ${fechaHoy}`);
console.log(`La fecha Caro es ${fechaCaro}`);


console.log(`El string de la fecha actual es ${stringFechaActual}`)
console.log(`La resta de la fecha es ${fechaCaro - fechaActual}`);

*/