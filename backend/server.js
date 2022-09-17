const express = require("express");
const RecipeRoute= require("./routes/recieps");
require("dotenv").config();

const app = express()

app.use((req,res,next)=> {
    console.log(req.path , req.method);
    next();
})

app.use(RecipeRoute);

app.listen(process.env.PORT, ()=>{
    console.log("Running on", process.env.PORT);
});