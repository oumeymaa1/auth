
// 1 
const express = require ("express");
const { register, login } = require("../controllers/user");
const { registerValidation, loginValidation, validation } = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// 2
const router = express.Router();

//4 routes 

//register
router.post('/register', registerValidation(), validation, register);
//login

router.post('/login', loginValidation(), validation, login);

//5 current user
router.get('/current', isAuth, (req,res) =>{
    res.send ("You are authorised to pass !!") 
})

// 3
module.exports = router;