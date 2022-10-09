const Users = require("../models/usersModel")
const jwt = require("jsonwebtoken");


const createToken = (_id) => {
    return  jwt.sign({_id},process.env.SECRET,{expiresIn: "3d"})
}

const LoginUser = async (req,res) => {
    res.json({message: "login user"})
};

const SignUpUser = async (req,res) => {
    const {email , password} = req.body
    try {
        const user = await Users.signup(email,password)

        const token = createToken(user._id)

        res.status(200).json({email,token})
    }catch (err) {
        res.status(400).json({error : err.message})
    }
};

module.exports = {LoginUser,SignUpUser};