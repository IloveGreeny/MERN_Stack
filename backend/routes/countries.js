const express = require("express");
const {createCountry,getAllCountries, getOneCountry} = require("../controllers/countryControllers");
const router = express.Router();

router.get("/",(req,res)=> {
    res.status(200);
    res.json({message : "Get All Countries"});
});

router.get("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Get One Country"});
});

router.post("/",async (req,res)=> {
    const {title, capital, weather} = req.body;
    try {
        const country = await Countries.create({title,capital,weather})
        res.status(200).json(country)
    }catch (err) {
        res.status(400).json({error : err.message})
    }
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

