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

// These other code is for hbs template
app.set('view engine', 'hbs');
app.set('views', __dirname+'/views');
app.get('/hbs/users' , (req,res) => {
    res.render('template', {titulo:'hbs', mensaje:'HBS | template', personas})
})

port = 3000;
app.listen(port, () => {
    console.log(`Listening port ${port}`)
})