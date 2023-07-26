const mongoose = require("mongoose")
const Order = new mongoose.Schema({
    orders: [
        {
            tablenumber: {
                type: Number,
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
        }
    ],
})
module.exports = mongoose.model("Order", Order)
