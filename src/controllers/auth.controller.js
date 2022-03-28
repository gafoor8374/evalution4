const User = require('../models/user.models')



const register = async (req,res)=>{
    try{
     let user = await User.findOne({email:req.body.email});
     if(user){
         return res.status(400).send({message:"email alredy exist"});
     }
     user = await User.create(req.body);
     return res.status(200).send(user)
    }catch(err){
        return res.status(400).send({message: err.message})
    }
}

const login = async (req, res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
    if(!user){
        return res.status(400).send("wrong email")
    }
    const match = user.checkPassword(req.body.password)
    if(!match) {
        return res.status(400).send({message:"wrong email and password"})
    }
    return res.status(200).send(user)
    }
catch(err) {
    return res.status(400).send({message:err.message});

}
}

module.exports={register,login}