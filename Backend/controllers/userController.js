const User = require("../models/userModel");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signUp = async (req, res, next) => {
    const { name, email, age, password } = req.body;

    try {
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: 'User is already exist!' });
        }
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, age, password:hashPass });
        res.status(201).json(newUser);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existUser = await User.findOne({ email });
        if (!existUser) {
            return res.status(401).json({ message: 'User with this email does not exist!' });
        }
        const validatedPass = await bcrypt.compare(password, existUser.password);
        if(!validatedPass){
            return res.status(400).json({ message: 'Invalid Password!' });
        }

        const token = jwt.sign({id:existUser._id, email: existUser.email}, process.env.SECRET_KEY, {expiresIn: '1d'})
        res.status(200).json({message: "Login Successfull", token: token});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message, message: "Error while finding users!" })
    }
}
exports.getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found !' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message, message: "Error while finding user!" })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message, message: "Error while updating users!" })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User removed!" })
    } catch (err) {
        res.status(500).json({ error: err.message, message: "Error while removing users!" })

    }
}