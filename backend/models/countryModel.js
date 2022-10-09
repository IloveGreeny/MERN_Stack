const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countrySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    capital: {
        type: String,
        required: true,
    },
    weather: {
        type: Number,
        required: false,
    }
},{timestamps:true});

module.exports = mongoose.model("Country",countrySchema);

