const express = require('express');
const getApiData = require('../controller/api');

const Router  = express.Router();

Router.get('/users',getApiData)

module.exports = Router