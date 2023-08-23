const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const UserRoute = require("./routers/UserRouter")
const ProductRoute = require("./routers/ProductRoute")
const OrderRoute = require("./routers/OrderRoute")
const app = express()
app.use(express.json())
app.use(cors())


let url = "mongodb+srv://cafe-app:cafe123@cafe-app-server.gcsks1c.mongodb.net/cafe-app?retryWrites=true&w=majority"

mongoose.connect(url)
    .then(res => console.log("ishladi"))
    .catch(error => console.log("error bor"))



app.use("/user", UserRoute)
app.use("/product", ProductRoute)
app.use("/order", OrderRoute)






let PORT = 8000
app.listen(PORT, () => {
    console.log(`bizning  port ${PORT}da ishlamoqda`)
})



