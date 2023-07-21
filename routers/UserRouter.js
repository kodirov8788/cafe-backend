const router = require("express").Router()
const User = require("../models/UserModel")

router.post("/create", async (req, res) => {
    try {
        const newUser = await new User({
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            username: req.body.username,
            role: req.body.role,
            gender: req.body.gender
        })
        let user = await newUser.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(404).send("error bor")
    }
})




module.exports = router