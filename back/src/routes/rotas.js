require("dotenv").config();
const express = require("express");
const route = express.Router();
const { testeApp } = require("../controllers/testeApp");

route.get("/teste", testeApp);

module.exports = route;
