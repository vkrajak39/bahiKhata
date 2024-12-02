const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { conn } = require('../database/connection');


const bcrypt = require('bcrypt');

const verifyLoginData =  (req,res)=>{
    console.log(req.body);


    conn.connect( (error)=>{
        if(error) 
            {
                console.log(error);
            }
            else
            {
                let sql = `select * from user where email_id=?`
                conn.query(sql,[req.body.email_id],  (error,result)=>{
                    if(error)
                        {
                            console.log(error);
                        }

                        

                    else if(result.length == 0 )
                        {
                            console.log("invalid email");
                        }
                        else
                        {
                            console.log(result);
                            console.log(result[0].password);
                            bcrypt.compare(req.body.password, result[0].password, function(error, result) {
                                if(error)
                                {
                                    console.log(error);
                                }
                                if(result == true)
                                {
                                    res.redirect('/dashboard');
                                }
                                else{
                                    res.redirect('/login');
                                }
                                
                            });
                        }
                })
            }
    })


    // res.redirect('/login');
    // res.code(200);

}

module.exports = {verifyLoginData}