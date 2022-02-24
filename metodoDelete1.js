let celulares = [
  {
      id: 1,
      nome: 'Motorola Moto E6 Plus',
      preco: 14999
  },
  {
      id: 2,
      nome: 'Motorola Moto G7',
      preco: 19999
  },
  {
      id: 3,
      nome: 'Alcatel 5033A',
      preco: 6999
  },
  {
      id: 4,
      nome: 'Samsung Galaxy A50',
      preco: 33499
  }
];

const express = require('express');
const router = express.Router();

router.delete("/celular/:id", (request, response) => {
  celulares = celulares.filter(c => c.id != request.params.id)
})