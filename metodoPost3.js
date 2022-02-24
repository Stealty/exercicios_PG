const express = require('express');
const router = express.Router();

let produto = {
    nome: null,
    preco: null
};

router.post("/criar/produto", (req, res) => {
    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.send(produto)
})