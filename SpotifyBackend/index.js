const express = require('express')
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("hi there");
});

app.listen(3000,()=>{
console.log(`server is listening at http://localhost:${port}`)
});