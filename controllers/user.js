const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        //req.body => newUser

        const {name, email, password, phone} = req.body
        const foundUser = await User.findOne({email})
        if (foundUser) {
            return res.status(400).send({message:'Email already exists'})
        } 
        const saltRounds = 10;
        const hashpassword = await bcrypt.hash (password, saltRounds);
            //const newUser
        const newUser = new User ({...req.body}) ;
        newUser.password = hashpassword;   
        //save

        await newUser.save()
        //creation token
        const token = jwt.sign({
            id: newUser._id
        },
        process.env.SECRET_KEY,
        {expiresIn: "1h"}
        );
        res.status(200).send({message:'registered successfully...',user:newUser, token})
   } catch (error) {
       res.status(400).send({message: "Cannot register user"});
    }
} ;

exports.login = async (req, res) => {
try {
    const {email, password} = req.body;
    //check mail exists
    const foundUser = await User.findOne({email})
    if (!foundUser) {
        return res.status(400).send({error: [{message:'Bad credential'}]})
    }
    const checkPassword = await bcrypt.compare (password, foundUser.password)
    if (!checkPassword){
        return res.status(400).send({error: [{message:'Bad credential'}]})
    }
    //creation token
    const token = jwt.sign({
        id: foundUser._id
    },
    process.env.SECRET_KEY,
    {expiresIn: "1h"}
    );
    res.status(200).send({message:'Login successfully...',user:foundUser, token});
 
} catch (error) {
    res.status(400).send({message: "Cannot loginsss user"});
 
}
};