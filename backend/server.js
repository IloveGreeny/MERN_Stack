const express = require("express");
const RecipeRoute= require("./routes/countries");
require("dotenv").config();

const app = express()

app.use(express.json());

app.use((req,res,next)=> {
    console.log(req.path , req.method);
    next();
})

app.use("/api/countries",RecipeRoute);


app.listen(process.env.PORT, ()=>{
    console.log("Running on", process.env.PORT);
});