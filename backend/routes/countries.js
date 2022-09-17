const express = require("express");

const router = express.Router();

router.get("/",(req,res)=> {
    res.status(200);
    res.json({message : "Get All Countries"});
});

router.get("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Get One Country"});
});

router.post("/",(req,res)=> {
    res.status(200);
    res.json({message : "Post A New Country"});
});

router.delete("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Delete A New Country"});
});


module.exports = router;

