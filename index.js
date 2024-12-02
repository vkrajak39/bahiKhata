const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const path = require('path');

const {recordsRouter,test} = require('./router/record.js');

const { conn } = require('./database/connection');
const { getAllTransactions,addRecord } = require('./service/transactionServices');




const {loginRouter} = require('./router/login.js')

const {registerRouter} = require('./router/register.js')


const {dashboradRouter} = require('./router/dashborad')



const app = express();



// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, 'public')));


// routing requests
app.use('/login',loginRouter)

console.log();
// app.get('/login',(req,res)=>{
//     res.render('path');
// })



app.use('/register',registerRouter);

app.use('/dashboard', dashboradRouter)


// Set EJS as the template engine
app.set('view engine', 'ejs');













// app.use('/records',recordsRouter)

app.get('/records',(req,res) => {
    const message = req.query.message || null;
    res.render(__dirname+"/views/records.ejs", { message: message });
});


app.post('/records',(req,res)=>{
    console.log(req.body);
    res.sendFile(__dirname + "/public/index.html")
});






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












app.listen(3000, () => {
    console.log(`Server started on port`);
});




app.get('/', (req, res) => {

    res.sendFile(__dirname + "/public/index.html");
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




app.get('/vineet',(req,res)=>{
    res.render("login");
})

app.post('/update',(req,res)=>{

    const userEmail =req.body.email 

    let data;
            conn.connect((error) => {
                if (error) return reject(error);
    
                console.log("Connected to db successfully");
    
                let sql = "SELECT * FROM transaction where email=?";
    
                conn.query(sql, [userEmail], (error, results) => {
                    if (error) return console,log(error);
    
                    
    
                    
                    data=results;


                    // update


                });
            });
        
        });

// testing purposes

app.get('/api/v1/test',(req,res)=>{

    res.status(200).json({
        status:"success",
        results: 3,
        data:[
                {   id:1,
                    name:"vineet"
                },
                {   id:2,
                    name:"kumar"
                },
                {
                    id:3,
                    name:"rajak"
                }
            ]
        
    })
});