require('dotenv').config();
const express = require('express');
const route = express.Router();
const { teste } = require('../controllers/testController');


route.get('/teste', teste);



module.exports = route


