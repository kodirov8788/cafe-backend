const router = require("express").Router()
const Order = require("../models/OrderModul")
const { pusher } = require("../Pusher")

router.post("/create", async (req, res) => {
    try {
        const neworder = await new Order({
            isready: false,
            ordernumber: req.body.ordernumber,
            tablenumber: req.body.tablenumber,
            waitername: req.body.waitername,
            order: req.body.order
        })
        await neworder.save().then(order => {
            pusher.trigger('chat-channel', 'new-message', order);
            res.status(201).send(order)
        }).catch(error => {
            res.status(404).send(error)
        })

    } catch (error) {
        res.status(404).send("error bu")
    }
})

router.put("/made/:id", async (req, res) => {
    const orderId = req.params.id;
    const neworder = await Order.findById(orderId);
    neworder.isready = true

    await neworder.save().then(order => {
        pusher.trigger('chat-channel', 'new-message', order);
        res.status(201).send(order)
    }).catch(error => {
        res.status(404).send(error)
    })
})
router.get("/get", async (request, response) => {
    try {
        let data = await Order.find({})

        await response.status(200).send(data)

    } catch (error) {
        await response.status(401).send("xato")

    }
})
router.delete("/delete/:id", async (req, res) => {
    let orderId = req.params.id
    let deletedOrder = await Order.findByIdAndDelete(orderId)
    res.status(200).send(deletedOrder)
})

router.put("/update/:id", async (req, res) => {
    const orderId = req.params.id;
    const neworder = await Order.findById(orderId);

    await neworder.save();
    res.status(200).send(neworder)
})
module.exports = router