const mongoose = require("mongoose")
const Order = new mongoose.Schema({
    isready: {
        required: true,
        type: Boolean
    },
    ordernumber: {
        type: Number,
        required: true
    },
    tablenumber: {
        type: String,
        required: true
    },
    waitername: {
        type: String,
        required: true
    },
    order: [
        {
            type: Object,
            required: true
        }
    ]
})
module.exports = mongoose.model("Order", Order)
