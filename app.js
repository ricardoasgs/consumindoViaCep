const express = require('express');
const app = express();
var request = require('request');
var resposta = {};
var port = process.env.PORT ||3000;

app.get('/:cep', (req,res) => {
    var cep = req.params.cep;
    var endpoint = "https://viacep.com.br/ws/"+ cep +"/json/";
    // console.log(endpoint)
    request(endpoint, (error, response, body) => {
        if(error || !body)
            console.log('Ocorreu algum erro, tente novamente mais tarde.')
        resposta = body;
        res.send(resposta);
    })
    });

app.listen(port, () => {console.log('ouvindo a porta: ',port)});
