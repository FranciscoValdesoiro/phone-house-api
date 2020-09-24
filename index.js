
const express = require("express");
const app = express();

const phones = require('./phones/phones.json')

app.listen(8080, () => {
 console.log("Server initialized on port 8080");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    next();
});

app.get('/phones', function (req, res) {
    res.send(phones);
});