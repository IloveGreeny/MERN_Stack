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

const getOneCountry = async (req,res) => {
    const  { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error : "No Such Country"})
    }

    const country = await Countries.findById(id);

    res.status(200).json(country)
};
module.exports = {
    createCountry,
    getAllCountries,
    getOneCountry
};
