const jwt = require("jsonwebtoken");


exports.auth = (req, res, next) => {
    const token = req.header("Authorization");
    if(!token){
        return res.status(400).json({ message: 'No token found!' });
    }

    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    } catch(err){
        res.status(500).json({message: 'Invalid token'})
    }

}