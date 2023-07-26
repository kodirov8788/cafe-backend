const router = require("express").Router()
const User = require("../models/UserModel")

router.get("/get", async (request, response) => {
    try {
        let data = await User.find({})

        await response.status(200).send(data)

    } catch (error) {
        await response.status(401).send("xato")

    }
})

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
router.put("/update/:id", async (req, res) => {
    const userid = req.params.id;
    const newuser = await User.findById(userid);

    req.body.name ? newuser.name = req.body.name : "";
    req.body.lastname ? newuser.lastname = req.body.lastname : "";
    req.body.age ? newuser.age = req.body.age : "";


    await newuser.save();
    res.status(200).send(newuser)
})

router.delete("/delete/:id", async (req, res) => {
    let userId = req.params.id
    let deletd = await User.findByIdAndDelete(userId)
    res.status(200).send(deletd)
})


module.exports = router





module.exports = router