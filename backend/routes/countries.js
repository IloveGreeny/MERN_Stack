const express = require("express");
const Countries = require("../models/countryModel")
const router = express.Router();

router.get("/",(req,res)=> {
    res.status(200);
    res.json({message : "Get All Countries"});
});

router.get("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Get One Country"});
});



router.delete("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Delete A New Country"});
});

router.patch("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Update A New Country"});
});

module.exports = router;

