const express = require('express');
const bodyParser = require('body-parser');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));





app.get('/',(request, response)=>{

});
app.post()
app.delete('path', (req, res) => {
    
});


let object = {
    name:"vineet",
    age: 22,
    college: "rcciit",
    array: ["vineet","kumar","rajak"]
}
// javascript object notation


// console.log(object.array[1]);