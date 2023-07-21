const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())


let PORT = 8000
app.listen(() => {
    console.log(`bizning  port ${PORT}da ishlamoqda`)
})



