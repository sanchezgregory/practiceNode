// Ejemplo simple
// const prom = new Promise((resolve, reject) => {
//    resolve('exito al procesar');
//    //reject('error');
// });
//
// prom.then((resultado) => {
//     console.log(resultado);
// }, (error) => {
//     console.log(error)
// })

// Ejemplo llamando a funcion en otro archivo
const promesa = require('./promesa');

promesa.calculate(4,10).then((res) => {
    console.log(res)
}, (error) => {
    console.log(error);
});