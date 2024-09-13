const express = require('express');
const bodyParser = require('body-parser');
const { conn } = require('./connection');
const { getAllTransactions,addRecord } = require('../service/transactionServices.js');

const getLogin = (req, res) => {
    res.render(  '../views/login.ejs');
    
}

module.exports = { getLogin }