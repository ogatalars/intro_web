const express = require('express');

const app = express();

// Daqui a pouco
// método (GET) + Caminho (/)

// Métodos HTTP Site Carros

// GET - buscar, obter, trazer...
// POST - criar
// PUT - atualizar
// DELETE - deletar

const usuarios = [{
    nome: 'tsunode',
    idade: 24,
}];

app.get('/usuarios', (request, response) => {
    response.json(usuarios);
});

app.post('/usuarios', (request, response) => {
    const novoUsuario = {
        nome: 'João Pedro',
        idade: 22
    };

    usuarios.push(novoUsuario);

    response.json(novoUsuario);
});

app.put('/usuarios/:idUsuario', (request, response) => {
    const idUsuario = request.params.idUsuario;

    console.log(idUsuario);

    response.send('Rotas com parametro');
});

app.listen(3000, () => {
    console.log('Minha aplicacao on');
});