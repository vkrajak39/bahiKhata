const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const path = require('path');




    const dashboradRouter = express.Router();

    dashboradRouter.route('/')
    .get((req,res)=>{

        
        res.render(path.resolve(__dirname,'../views/dashboard.ejs'));
    })

    module.exports={dashboradRouter};

