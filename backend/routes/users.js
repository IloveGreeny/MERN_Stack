const express = require("express");
const {SignUpUser, LoginUser} = require("../controllers/usersControllers");

const router = express.Router();

router.post("/login",LoginUser);

router.post("/signup",SignUpUser)

module.exports = router;