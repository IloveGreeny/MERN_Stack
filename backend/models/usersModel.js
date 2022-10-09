const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        unique: true
    }
})

userSchema.statics.signup = async function(email,password)  {

    if(!email || !password) {
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)) {
        throw Error("Not an valid Email")
    }
    if(!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough");
    }

    const exists = await this.findOne({email});

    if(exists) {
        throw new Error("Email already in use")
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({email,password: hash})

    return user
}

userSchema.statics.login = async function (email,password) {
    if(!email || !password) {
        throw Error("All fields must be filled")
    }
    const user = await this.findOne({email});

    if(!user) {
        throw new Error("Email Incorrect")
    }

    const match = await bcrypt.compare(password,user.password);

    if(!match) {
        throw Error("password incorrect")
    }
    return user;
}

module.exports = mongoose.model("userScheme",userSchema);
