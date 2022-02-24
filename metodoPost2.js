const express = require('express');
const router = express.Router();

router.post("/ver-body", (request, response) => {
    response.send(request.body);
});