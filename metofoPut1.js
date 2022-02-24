const express = require('express');
const app = express();

const methodOverride = require("method-override")
app.use(methodOverride("_method"))