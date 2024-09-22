const express = require('express');
const bodyParser = require('body-parser')



function verifyLoginData (req,res){
    console.log(req.body);




    res.sendFile(__dirname + "/public/index.html");
    // res.code(200);

}

module.export = {verifyLoginData}