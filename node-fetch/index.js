// Asi dá error por incompatibilidad de verison
// const fetch = require('node-fetch');

// A new version of node-fetch no support require.
// para aceptarlo, se debe importar como se muestra, pero ademas, se debe agregar "type":"module" al root del package.json

import fetch from "node-fetch";
fetch('https://api.github.com/users/sanchezgregory').then((res) => {
    return res.json();
}).then((res) => {
    console.log('respuesta1: ' , res);
})

let prom = fetch('https://api.github.com/users/sanchezgregory');
prom.then((res) => {
        return res.json();
    }
).then((res) => {
    console.log('respuesta2: ' , res);
})
