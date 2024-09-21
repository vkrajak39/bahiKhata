const bcrypt = require('bcrypt');

const saltNumber =10;

const saveUserData = (user)=>{

    bcrypt.hash(user.password,saltNumber,)


    const sql = `Insert into user(name,mobile_number,email_id,city,state,country,pincode,role_id,password) values(?,?,?,?,?,?,?,?,?)`;


}