const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://gafoor:gafoor8374@cluster0.v8wsr.mongodb.net/redis?retryWrites=true&w=majority")
}