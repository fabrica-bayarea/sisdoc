require('dotenv').config();
const express = require('express');
const route = require('./src/routes/rotas.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(route);

app.listen(port, () => console.log(`Server runnig in the port ${port}`));

