const express = require('express');
const router = express.Router();

let users = [];

router.get('/users', (req, res) => {
    res.json({users});
});

router.post('/users', (req, res) => {
    const userData = req.body;
    const newId = users.length + 1;
    const userSaving = {
        id: newId,
        name: userSaving.name,
        cpf: userSaving.cpf,
        email: userSaving.email
    };
    users.push(user);

    res.status(201).json({'message': 'Usuário cadastrado com sucesso'});
});

router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const userListing = users.find(user => user.id === id);

    res.json({userListing});
});

router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    const newId = users.length + 1;
    const userUpdating = {
        id: newId,
        name: userUpdating.name,
        cpf: userUpdating.cpf,
        email: userUpdating.email
    };
    const idDeleting = users.findIndex(user => user.id = id);
    users.splice(idDeleting, 1);
    users.push(userUpdating);

    res.json({'message': 'Usuário atualizado com sucesso'});
});

router.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const idDeleting = users.findIndex(user => user.id === id);
    users.splice(idDeleting, 1);

    res.status(204).json({'message': 'Usuário removido com sucesso'})
});

module.exports = router;