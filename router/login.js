const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const path = require('path');




const loginRouter = express.Router();



loginRouter.post('/',(req,res)=>{
    res.render("../views/login.ejs");
});

loginRouter.get('/',(req,res)=>{
    res.render("../views/login.ejs");
    });
    

module.exports={loginRouter};
    
