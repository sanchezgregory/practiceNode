// Lib utilitaria: Lodash y Yargs
// Operaciones de variables tipo json
// _.assigm = concatena objetos
// _.times(num, callback()) => itera tantas veces lo que está dentro del callback
// _.find(objeto, {nombre:"jhon"}); = busca un objeto mediante uno o mas atributos dentro de una coleccion de objetos
const _ = require('lodash');

let x = {"nombre":"Greg"}
let y = {"apodo":"sans"}
let z = [
    { nombre : "jhon", apellido: "harris", edad:20},
    { nombre: "mito", apellido: "code", edad: 23}
];

let resultado = _.assign(x,y)
console.log(resultado)

_.times(3, () => console.log("Hola mundo"))

resultado = _.find(z, {nombre:"jhon"}); // buscar mediante un atributo
console.log(resultado);

resultado = _.find(z, {nombre:"jhon", edad:"20"}); // buscar mediante dos atributos, pero si el tipo de dato de busqueda no coincide, no lo encuentra edad con o sin comillas
console.log(resultado)

// De manera primitiva propia de js
// process.argv permite capturar input desde la consola haciendo = node path/file.js variableXYZ, desde la posicion 2 se capturan los datos ingresados
let comando = process.argv;
console.log(comando)
if (comando[2] === "hola") {
    console.log("has insertado la palabra correcta");
} else {
    console.log("has insertado la palabra INcorrecta");
}

// Usando la lib yargs
// la librería yasrgs hace mas facil esta captura de datos, npm i yargs --save
const var_yargs = require('yargs');
console.log(var_yargs.argv); // haciendo esto, la salida es: { _: [ 'usuario', 'greg' ], '$0': 'lodashYargs/index.js' }


// ahora haciendo esto, mejoramos la salida. Corriendo el node lodashYargs/index.js --usuario=greg  o tbn --usuario greg
const yargs = require('yargs').argv;
if (yargs.usuario === "greg") {
    console.log("excelente");
} else {
    console.log("vuelve a intentar");
}

