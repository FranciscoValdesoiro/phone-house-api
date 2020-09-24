
const express = require("express");
const app = express();

const phones = require('./phones/phones.json')

app.listen(8080, () => {
 console.log("Servidor inicializado en el puerto 8080");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    next();
});

app.get('/phones', function (req, res) {
    res.send(phones);
});