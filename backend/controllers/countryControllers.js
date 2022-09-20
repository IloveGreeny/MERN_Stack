const Countries = require("../models/countryModel");
const mongoose = require("mongoose");

const createCountry = async (req,res) => {
    const {title, capital, weather} = req.body;
    try {
        const country = await Countries.create({title,capital,weather})
        res.status(200).json(country)
    }catch (err) {
        res.status(400).json({error : err.message})
    }
};

const getAllCountries = async (req,res) => {
    const countries = await Countries.find({}).sort({createdAt : -1});
    res.status(200).json(countries);
};


module.exports = {
    createCountry,
    getAllCountries,
    getOneCountry
};
