const express = require("express");

const app = express()

app.get("/",((req,res)=> {
    res.status(200);
    res.json({country : "Armenia"});
}))

app.listen(5000, ()=>{
    console.log("Running on Port 5000");
});