const Task = require('../models/taskModel')

exports.createTask = async (req, res)=> {

    try{
        const task = await Task.create({userId:req.user.id, title:req.body.title});
        res.status(201).json(task);
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.getTasks = async (req, res)=> {

    try{
        const tasks = await Task.find({userId: req.user.id})
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

exports.updateTask = async (req, res)=> {

    try{
        const task = await Task.findOneAndUpdate({userId:req.user.id, _id:req.params.id}, {completed: true}, {new:true});
        res.status(200).json(task);
    }catch(err){
        res.status(500).json({error: err.message})
    }
}
exports.deleteTask = async (req, res)=> {

    try{
        await Task.findOneAndDelete({userId:req.user.id, _id:req.params.id});
        res.status(200).json({message: "Task deleted!"});
    }catch(err){
        res.status(500).json({error: err.message})
    }
}
