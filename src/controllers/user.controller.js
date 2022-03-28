const express= require('express');
const User = require('../models/user.models');
const { body, validationResult } = require('express-validator');
const router =express.Router();

router.post("",
body("firstName").not().isEmpty().withMessage("firsName is not empty").isLength({min:3}).withMessage("first name must be at least 3 characters"),
body("lastName").not().isEmpty().withMessage("lastName is not empty").isLength({min:3}).withMessage("last name must be at least 3 characters"),
body("email").isEmail().custom(async (value)=>{
    const user = await User.findOne({email: value});
    if(user){
        throw new Error("email is already exist");
    }
    return true;
})

,async(req,res)=>{
    try{

        const user = await User.create(req.body);

        return res.status(201).send(user)
    }
catch(err){
    return res.status(400).send({message: err.message});
}
})

module.exports=router;