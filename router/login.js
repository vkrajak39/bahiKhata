const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const path = require('path');

const {verifyLoginData} = require('../service/loginService.js');


const loginRouter = express.Router();



loginRouter.route('/')
.post(verifyLoginData)
.get((req,res)=>{
    res.render("../views/login.ejs");
    });
    

    
// "localhost:3000/login/user"
    // loginRouter.route('/user')
    // .get(()=>{})
    // .post(()=>{})


module.exports={loginRouter};
    
