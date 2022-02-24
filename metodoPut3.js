let filmes = [
  {
      id: 1,
      titulo: 'Spider-Man: Longe de casa',
      duracao: 129,
      genero: 'Aventura'
  },
  {
      id: 2,
      titulo: 'Toy Story 4',
      duracao: 100,
      genero: 'Animacao'
  },
  {
      id: 3,
      titulo: 'X-Men: Fênix Negra',
      duracao: 113,
      genero: 'Acao'
  }
];

const express = require('express');
const router = express.Router();

router.put('/filme/:id', (request, response) => {
  filmes.forEach(f => {
      if (f.id == request.params.id) {
          f.titulo = request.body.titulo;
          f.duracao = request.body.duracao;
          f.genero = request.body.genero;
      }
  })
})