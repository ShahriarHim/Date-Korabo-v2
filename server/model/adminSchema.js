const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: {
        type:Number,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    cPassword: {
        type:String,
        required: true
    },    
    keyword: {
        type:String,
        required: true
    } 

})

const Admin = mongoose.model('Admin',adminSchema);
module.exports = Admin;




