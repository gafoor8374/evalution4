const express = require('express');
const connect=require('./configs/db');
const userController = require('./controllers/user.controller')
const todoController = require('./controllers/todo.contoller')
const {register,login}=require('./controllers/auth.controller')
const app = express();

app.use(express.json());

app.use("/users",userController);
app.use("/register",register);
app.use("/login",login)
app.use("/todos",todoController);

app.listen(5000,async(req,res)=>{
    try{
        await connect()
        console.log("listening on port 5000")
    }catch(err){
        console.log({message: err.message})
    }
})