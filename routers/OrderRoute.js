const router = require("express").Router()
const Order = require("../models/OrderModul")
router.post("/create", async (req, res) => {
    try {
        const order = await new Order({
            orders: [
                {
                    tablenumber: req.body.tablenumber,
                    waitername: req.body.waitername,
                    order: req.body.order
                }
            ]

        })
        const neworder = await order.save()
        res.status(201).send(neworder)
    } catch (error) {
        res.status(404).send("error bu")
    }
})
module.exports = router