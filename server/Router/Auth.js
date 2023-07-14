const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require("../models/Schema")
router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', async(req, res) => {
    const {name, email, phone , work,  password, cpassword} = req.body;
    if(!name|| !email||  !phone || !work||  !password|| !cpassword){
        return res.status(422).json({error: "plz fill data properly"});

    }
    try{
      const userExist = await  User.findOne({email:email})
            if(userExist){
                return res.status(422).json({error: "already exits"});
            }else if(password != cpassword){
                return res.status(422).json({error: "passwords doesnt match"});
   
            }else{
                const user =new User({name, email, phone , work,  password, cpassword});
                await user.save();
                res.status(201).json({message: "user registered successfully"});           
            }
         }catch(err){
console.log(err);
    }
    
});


router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    if(!email|| !password){
        return res.status(400).json({error: "plz fill data properly"});

    }
    try{
      const userLogin = await  User.findOne({email:email})
            if(!userLogin){
             res.status(400).json({error: "user error"});
            }else{
                res.json({message: "user signed in successfully"});
            }
         }catch(err){
        console.log(err);
    }
    
});
module.exports = router;