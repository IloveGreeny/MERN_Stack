const express = require("express");
require("dotenv").config();

const app = express()

app.use((req,res,next)=> {
    console.log(req.path , req.method);
    next();
})

app.get("/",((req,res)=> {
    res.json({country : "Armenia"});
}))

app.listen(process.env.PORT, ()=>{
    console.log("Running on", process.env.PORT);
});