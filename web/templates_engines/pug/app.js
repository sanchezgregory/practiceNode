//import express from 'express';

const express = require('express');
const app = express();

let personas = [
    {
        id:1,
        nombre:"Greg"
    },
    {
        id:2,
        nombre:"Ale"
    },
    {
        id:3,
        nombre:"Mari"
    }
]

// These codes are for pug template
app.set('view engine', 'pug'); // <-- Defino cual motor de plantilla
app.set('views', __dirname+'/views'); // <-- Defino la ruta para buscar el tmeplate

app.get('/pug/users', (req,res) => {
    res.render('template', {titulo:'pug',  mensaje:'PUG | template', personas});
});


port = 3000;
app.listen(port, () => {
    console.log(`Listening port ${port}`)
})