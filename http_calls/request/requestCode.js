// se consume asi -> node http_calls/request/geocode.js --userId=2

const request = require('request');
const argv = require('yargs').argv;

let userId = argv.userId
let url = `https://reqres.in/api/users/${userId}`;

// la url es asi https://reqres.in/api/users/2
console.log(url);

request({url:url,json:true}, (error, response, body) => {
  // console.log(body); // si vienen arrays, no muestra su contenido.
  // console.log(JSON.stringify(body)) // Muestra incluso sus arrays
  console.log(response.statusCode);
  if (error) {
    console.log('servicio no disponible')
  } else if (response.statusCode === 200) {
    console.log(JSON.stringify(body, undefined, 2)) // mejorando la salida, sin filtro y con identación (2) es el espaciado para la identacion
    console.log(JSON.stringify(body.data.last_name));
  } else {
    console.log('Something wrong happened');
  }

});

// como lo indica la doc es asi
// request(url, function(error, response, body) {
//   console.log('error', error);
//   console.log('statusCode:' , response && response.statusCode);
//   console.log('body:', body);
// });