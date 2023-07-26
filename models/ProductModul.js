const mongoose = require("mongoose")
const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: [
        {
            option: {
                type: String
            }
        }
    ]
})
module.exports = mongoose.model("Product", Product)
