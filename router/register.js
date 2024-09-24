const express = require('express');
const path = require('path');
const {saveRegistrationData} = require('../service/registerService.js');


const registerRouter = express.Router();


registerRouter.route('/')
    .get((req,res)=>{
        res.render(path.resolve(__dirname,"../views/register.ejs"));
    })
    .post(saveRegistrationData);


    module.exports = {registerRouter};