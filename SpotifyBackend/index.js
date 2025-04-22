const express = require('express')
const app = express();
const port = 3000;

// connecting to database
require('dotenv').config();
console.log(process.env.MONGO_PASSWORD);
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to mongoDB")
}).catch((err)=>{
    console.log(err)
});


app.get('/',(req,res)=>{
    res.send("hi there");
});

app.listen(3000,()=>{
console.log(`server is listening at http://localhost:${port}`)
});
