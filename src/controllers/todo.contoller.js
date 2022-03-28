const express= require('express');
const Todo = require('../models/todo.models')

const router =express.Router();

router.post("",
async(req,res)=>{
    try{

        const todos = await Todo.create(req.body);

        return res.status(201).send(todos)
    }
catch(err){
    return res.status(400).send({message: err.message});
}
})
router.get("",async(req,res)=>{
    try{
        const todos = await Todo.find().lean().exec();

        return res.status(200).send(todos)
    }catch(err){
        return res.status(400).send({message: err.message});
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id).lean().exec();

        return res.status(200).send(todo)
    }catch(err){
        return res.status(400).send({message: err.message});
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new : true}).lean().exec();

        return res.status(200).send(todo)
    }catch(err){
        return res.status(400).send({message: err.message});
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(todo)
    }catch(err){
        return res.status(400).send({message: err.message});
    }
})
module.exports=router;