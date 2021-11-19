const mongoose = require('mongoose'); 

const patientSchema = mongoose.Schema({
    patient_name: {
        type: String, 
    },
    patient_image: {
        type: String, 
    },
    rating_score: {
        type: String, 
    },
    address: {
        type: String, 
    },
    website: {
        type: String, 
    },
    phoneNumber: {
        type: String, 
    },
    latitude: {
        type: String, 
    },
    longitude: {
        type: String, 
    },
    address: {
       city: {
           type: String,
       },
       

    }
});


const patients = mongoose.model('patients', patientSchema,'Patients'); 
module.exports = patients