const express = require('express');
const router = express.Router();

let products = [];

router.get('/products', (req, res) => {
    res.json({products});
});

router.post('/products', (req, res) => {
    const productData = req.body;
    const newId = products.length + 1;
    const productSaving = {
        id: newId,
        name: productData.name,
        price: productData.price
    };

    res.status(201).json({'message': 'Produto cadastrado com sucesso'});
});

router.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const productData = req.body;
    const newId = products.length + 1;
    const productUpdating = {
        id: newId,
        name: productData.name,
        price: productData.price
    };
    const idDeleting = products.findIndex(product => product.id === id);
    products.splice(idDeleting, 1);
    products.push(productUpdating);

    res.json({'message': 'Produto atualizado com sucesso'});
});

// router.put();

router.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const idDeleting = products.findIndex(product => product.id === id);
    products.splice(idDeleting, 1);

    res.status(204).json({'message': 'Produto removido com sucesso'});
});

module.exports = router;