const express = require('express'); 
const mongoose = require('mongoose'); 
const Doctor = require('../model/Doctor');
const jwt = require('jsonwebtoken'); 
const ObjectId = require('mongoose').ObjectID;
require('dotenv').config(); 

exports.loadDoctorController = async (req, res)=> {
    console.log("getting Doctors"); 
    try {
        console.log("verifying"); 
        const Doctors = await Doctor.find({});
        console.log("send back the result"); 
        console.log(Doctors);
        return res.send(Doctors)
    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}

exports.loadDoctorControllerById = async (req, res)=> {
    const id  = req.params.id;
    try {
        console.log("Loading"); 
        const Doctors = await Doctor.findById({_id : mongoose.Types.ObjectId(req.params.id.trim())});
        console.log("send back the result"); 
        console.log(Doctors);
        return res.send(Doctors)
    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}




