const Users = require("../models/usersModel")

const LoginUser = async (req,res) => {
    res.json({message: "login user"})
};

const SignUpUser = async (req,res) => {
    const {email , password} = req.body
    try {
        const user = await Users.signup(email,password)

        res.status(200).json({email,user})
    }catch (err) {
        res.status(400).json({error : err.message})
    }
};

module.exports = {LoginUser,SignUpUser};