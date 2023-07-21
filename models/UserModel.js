const mongoose = require("mongoose")
const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: "user"
    },
    gender: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("User", User)
