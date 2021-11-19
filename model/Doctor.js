const mongoose = require('mongoose'); 

const doctorSchema = mongoose.Schema({
    doctorID: {
        type: String, 
    },
    username: {
        type: String, 
    },
    password: {
        type: String, 
    },
    first_name: {
        type: String, 
    },
    profile_image: {
        type: String, 
    },
    address: {
        street: {
            type: String, 
        },
        city: {
            type: String, 
        },
        state: {
            type: String, 
        },
        country: {
            type: String, 
        },
        zipcode: {
            type: String, 
        }
    },
    phoneNumber: {
        type: String, 
    },
    email: {
        type: String, 
    },
    date_of_birth: {
        type: Date, 
        default: new Date()
    },
    doctor_type: {
        type: String, 
    },
    
});


const Doctor = mongoose.model('Doctor', doctorSchema,'Doctor'); 
module.exports = Doctor