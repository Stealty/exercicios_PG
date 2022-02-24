const express = require('express');
const router = express.Router();

router.get("/produtos", (request, response) => {
    response.send(request.query);
})