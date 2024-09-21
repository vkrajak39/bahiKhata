const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const path = require('path');

const { conn } = require('./database/connection');
const { getAllTransactions,addRecord } = require('./service/transactionServices');

const {getLogin} = require('./database/route');





const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set EJS as the template engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


// Connect to MySQL
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});


const sql =
    'INSERT INTO transaction VALUES (2,1, 5000,"testing","07/07/2024","12:00","billNo 123456",1,1)';


// conn.query(sql, (err, results) => {
//     if (err) throw err;
//     else {
//         console.log("data inserted");
//     }
// });

conn.close;






// app.get



app.listen(3000, () => {
    console.log(`Server started on port`);
});




app.get('/', (req, res) => {

    res.sendFile(__dirname + "/public/index.html");
});



app.post('/login',(req,res)=>{
    console.log(req.body);




    res.sendFile(__dirname + "/public/index.html")

});

app.get('/login',(req,res)=>{
res.render(__dirname+"/views/login.ejs");
});


app.get('/register',(req,res)=>{

    res.render(__dirname + '/views/register.ejs')
})

app.post('/register',(req,res)=>{

    

});



app.get('/addTransactions',(req,res)=>{

    res.render(__dirname+"/public/transaction")
    
})




app.get('/getTransactions', async (req, res) => {
    try {
        // Await the result from the database query
        let rows = await getAllTransactions();

        
        // Render the EJS template and pass the rows data
        res.render(__dirname+"/public/testTabel", { rows });

        console.log
        console.log("number of rows are "+ rows.lenght);

        
    } catch (error) {
        console.error("Error fetching transactions: ", error);

        // Send a 500 error if something goes wrong
        res.status(500).send('Error fetching transactions');
    }
});


app.post('/addTransactions',async (req,res)=>{

    try{

        let id = await addRecord(req.body);
        console.log("added record id is :"+id);

        res.redirect('/');

    }
    catch(error)
    {
        console.error("Error inserting transaction ", error);

        // Send a 500 error if something goes wrong
        res.status(500).send('Error inserting transactions');
    }


});
