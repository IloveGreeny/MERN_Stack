const express = require("express");
const {createCountry,getAllCountries, getOneCountry} = require("../controllers/countryControllers");
const router = express.Router();

router.get("/",getAllCountries);



router.delete("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Delete A New Country"});
});

router.patch("/:id",(req,res)=> {
    res.status(200);
    res.json({message : "Update A New Country"});
});

module.exports = router;

