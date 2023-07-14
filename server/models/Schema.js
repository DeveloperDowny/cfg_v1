const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    fname: {
        type: String,
        required:true
    },
    lname: {
         type: String,
        required:true
    },
    email: {
        type: Number,
        required:true
    },
    password: {
         type: String,
        required:true
    },
})

const User = mongooose.model('USER', userSchema);

module.exports = User;