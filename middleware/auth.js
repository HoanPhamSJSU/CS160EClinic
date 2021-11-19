const express = require('express');
const jwt = require('jsonwebtoken'); 
const User = require('../model/Doctor');



require('dotenv').config();

exports.auth = (req, res, next) => {


    console.log("header", req.headers);

    const authHeader = req.headers['authorization']
    console.log("auth tok", authHeader);
    const token = authHeader && authHeader.split(' ')[1]

    console.log("token", token); 
    console.log("getting user"); 

    jwt.verify(token, process.env.KEY, (err, user) => {

        if (err) {
            return res.status(401).json({ error: err })
        }

        console.log("user token", user)

        req.user = user
    })

    next()
}