const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

const express = require("express");
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Aberto na porta 3333 - http://localhost:3333");
});