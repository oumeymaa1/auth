// 1 require mongoose

const mongoose = require('mongoose');

// 2 create schema

const {Schema, model} = mongoose;

// 3 creation

const userSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }, 

    phone: {
        type: Number
    }
});
// 4 export
module.exports = user = model ("user", userSchema);
