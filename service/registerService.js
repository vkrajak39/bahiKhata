const bcrypt = require('bcrypt');
const saltRounds = 10;
const { conn } = require('../database/connection');
const bodyParser = require('body-parser');



const saveRegistrationData = async (req,res)=>{

    let passHash='';
    
    bcrypt.hash(req.body.password, saltRounds, (err, hash)=> {
        // Store hash in your password DB.
        if(err)
        {
            console.log(err);
        }
        else
        {
            conn.connect((error)=>{
                if(error) console.log(error);
        
                let sql = `Insert into user(name,mobile_number,email_id,city,role_id,password) values(?,?,?,?,?,?)`;
                const dataObj= req.body;
        
                conn.query(sql,[dataObj.name, dataObj.mobile_Number,dataObj.emailId,dataObj.city,1,hash],(error,result)=>{
                    if(error)
                        { 
                            console.log(error);
                            return;
                        }
        
                    else{
                        console.log("registration data saved successfully\n");
                        console.log(hash.length);
                        console.log(result);
                        return result;
                    }
        
                    
                });
            });
        }

        
    });

    


     res.redirect('/login');

}

module.exports = {saveRegistrationData}


