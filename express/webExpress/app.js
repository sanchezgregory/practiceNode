//const express = require('express');
import express from "express";
const app = express();

let isLogged = () => true;
let logger = (req, res, next) => {
    console.log('Peticion tipp: ' , req.method);
    next();
}
let showIp = (req,res,next) => {
    console.log(`IP es 127.0.0.1`);
    next();
};

app.use((req,res,next) => {
    if(isLogged()) {
        next();
    } else {
        res.send('Not logged')
    }
    // o así
}, logger, showIp)

// puede ser asi
// app.use(logger);

app.get('/:user', function(req, res) {
    let user = req.params.user;
    res.send(`Bienvenido user: ${user}`);
});

// using postman podemos probar con post, put and delete

app.post('/', (req,res) => {
    res.send('Recibido POST')
})

app.put('/', (req,res) => {
    res.send('recibiendo PUT')
})

app.delete('/', (req,res) => {
    res.send('Recibido DELETE');
})

// Using function, better using arrow function
// app.listen(3000, function() {
//     console.log('Example app listening on port 3000');
// })

app.listen(3000, ()=>{
    console.log('Example app listening on port 3000');
})