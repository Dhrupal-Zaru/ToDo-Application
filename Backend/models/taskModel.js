const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
})

module.exports = mongoose.model("Task", taskSchema);