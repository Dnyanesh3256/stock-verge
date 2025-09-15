const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UsersModel = require("./model/UsersModel");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "mysecret";

router.post("/signup", async (req, res) => {
    try{
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UsersModel({ username, password: hashedPassword });
        await user.save();

        res.status(201).send("You signed up successfully!");
    }catch(err){
        res.status(500).send("Error registering user!");
    }
});

router.post("/login", async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await UsersModel.findOne({ username });

        if(!user){
            return res.status(400).send("Invalid username or password!");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send("Invalid username or password!");
        }

        const token = jwt.sign({ id: user._id}, JWT_SECRET, {expiresIn: "12h"});
        res.json({ token });
    }catch(err){
        res.status(500).send("Error login user!");
    }
});

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if(!token){
        return res.status(401).send("Access denied. No token provided!");
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(403).send("Invalid token!");
        }

        req.user = decoded;
        next();
    });
}

module.exports = { router, authMiddleware };