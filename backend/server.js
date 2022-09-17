const express = require("express");
require("dotenv").config();

const app = express()

app.get("/",((req,res)=> {
    res.json({country : "Armenia"});
}))

app.listen(process.env.PORT, ()=>{
    console.log("Running on" + process.env.PORT);
});