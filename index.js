const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const UserRoute = require("./routers/UserRouter")
const OrderRoute = require("./routers/OrderRoute")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())

let url = process.env.MONGO_URL
mongoose.set('strictQuery', true)
mongoose.connect(url)
    .then(res => console.log("ishladi"))
    .catch(error => console.log("error bor"))

app.use("/user", UserRoute)
app.use("/order", OrderRoute)


let PORT = 5001
app.listen(PORT, () => {
    console.log(`bizning  port ${PORT}da ishlamoqda`)
})



