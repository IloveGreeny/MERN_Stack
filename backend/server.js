const express = require("express");
const ReciepeRoute = require("./routes/recieps");
require("dotenv").config();

const app = express()

app.use((req,res,next)=> {
    console.log(req.path , req.method);
    next();
})

app.get("/",(req,res)=> {
    res.status(200);
    res.json({country : "Armenia"})
});


app.listen(process.env.PORT, ()=>{
    console.log("Running on", process.env.PORT);
});