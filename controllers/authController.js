const express = require("express");
const mongoose = require("mongoose");
const Doctors = require("../model/Doctor");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
require("dotenv").config();

exports.signinController = async (req, res) => {
  const { email, password } = req.body;

  console.log("Signin - happening");
  let hashPassword = "";
  // generate salt to hash password
  const salt = await bcrypt.genSalt(10);
  // now we set Doctor password to hashed password
  hashPassword = await bcrypt.hash(password, salt);

  try {
    console.log("verifying");
    const Doctor = await Doctors.findOne({
      email: email,
    });
    // check if Doctor found
    if (!Doctor) {
      return res.status(404).json({ message: "Doctor not found!" });
    }
    console.log("Current Doctor: " + Doctor);
    // check if password matches
    if (!bcrypt.compareSync(password, Doctor.password))
      return res.status(401).json({ message: "Incorrect password!" });

    // generate auth token
    const token = jwt.sign(JSON.stringify(Doctor), process.env.SECRET_JWT);

    console.log("Doctor return ", token);

    return res.json(Doctor);
  } catch (e) {
    console.log("err", e);
    return res.status(500).json({ message: e });
  }
};

exports.signupController = async (req, res) => {
  const { account_name, email, password } = req.body;
  let hashPassword = "";
  try {
    console.log("registering");
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set Doctor password to hashed password
    hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword);

    const Doctor = await Doctor.create({
      account_name: account_name,
      email: email,
      password: hashPassword,
    });
    console.log("Doctor", Doctor);
    const token = jwt.sign(JSON.stringify(Doctor), process.env.SECRET_JWT);

    console.log("Doctor return ", token);

    return res.send(Doctor);
  } catch (e) {
    console.log("Logging error");
    console.log(e.message);
    return res.status(500).send(e.message);
  }
};

exports.currentDoctor = async (req, res) => {
  const { email, password } = req.body;
  console.log("current Doctor", req.Doctor);
  const Doctor = await Doctor.findById(req.Doctor._id);

  console.log("curr Doctor", Doctor);
  // const token = jwt.sign(JSON.stringify(Doctor), process.env.KEY);

  // console.log("Doctor return ", token);

  return res.send(Doctor);
};

exports.gettingDoctorInfo = async (req, res) => {
  console.log("Getting Doctor By Email");
  const email = req.params['email']; 
  try {
    console.log("Loading");
    const Doctor = await Doctor.findOne({ email: email });
    console.log("curr Doctor", Doctor);
    return res.send(Doctor);
  } catch (e) {
    console.log("err", e);
    return res.status(500).json({ message: e });
  }
};

exports.updateDoctorInfo = async (req, res) => {
  const { currEmail, account_name, email, phone, country, state } = req.body;
  try {
    console.log("Loading");
    console.log(currEmail);
    console.log(account_name);
    console.log(email);
    const Doctor = await Doctor.update(
      { email: currEmail },
      {
        account_name: account_name,
        phone: phone,
        country: country,
        state: state
      }
    );
    console.log("curr Doctor", Doctor);
    return res.send(Doctor);
  } catch (e) {
    console.log("err", e);
    return res.status(500).json({ message: e });
  }
};

const generateToken = (Doctor) => {
  console.log("kesadfy", process.env.KEY);
  const token = jwt.sign(Doctor, process.env.KEY);

  console.log("token", token);
  return { ...{ Doctor }, ...{ token } };
};
