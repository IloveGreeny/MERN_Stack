const express = require("express");
const mongoose = require("mongoose");
const CountryRoute = require("./routes/countries");
require("dotenv").config();

const app = express()

app.use(express.json());

app.use((req,res,next)=> {
    console.log(req.path , req.method);
    next();
})

app.use("/api/countries",CountryRoute);

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, ()=>{
            console.log("Connected and Running on", process.env.PORT);
        });
    })
    .catch((err)=> {
        console.log(err)
    })
