const express = require('express');
const servidor = express.application;
const cors = require('cors');
const rotas = require('./rotas');

servidor.use(express.json());
servidor.use(cors);
servidor.use(rotas);

servidor.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
