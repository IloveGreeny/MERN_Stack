const Countries = require("../models/countryModel");
const mongoose = require("mongoose");



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
