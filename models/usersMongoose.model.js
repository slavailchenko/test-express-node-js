const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const validateEmail = (email) => {
    let r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return r.test(email)
};

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },    
    email: {
        type: String,        
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
        'Please fill a valid email address'],
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    }
}, 
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('user', userSchema);