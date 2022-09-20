const express = require("express");
const {createCountry,getAllCountries, getOneCountry, deleteCountry, updateCountry} = require("../controllers/countryControllers");
const router = express.Router();

router.get("/",getAllCountries);

router.get("/:id",getOneCountry);

router.post("/",createCountry);

router.delete("/:id",deleteCountry);

router.patch("/:id",updateCountry);

module.exports = router;

