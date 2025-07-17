const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
    },
    age:{
        type: Number
    },
    password:{
        type: String,
        require:true
    }
})

module.exports = mongoose.model('User', userSchema);