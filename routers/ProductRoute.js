const router = require("express").Router()
const Product = require("../models/ProductModul")

router.post("/create", async (req, res) => {
    try {
        const product = await new Product({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            type: req.body.type
        })
        const newproduct = await product.save()
        res.status(201).send(newproduct)
    } catch (error) {
        res.status(404).send("error bu")

    }
})


router.put("/update/:id", async (req, res) => {
    const productid = req.params.id;
    const newproduct = await Product.findById(productid);
    req.body?.name ? newproduct.name = req.body.name : "";
    req.body?.category ? newproduct.category = req.body.category : "";
    req.body?.price ? newproduct.price = req.body.price : "";
    req.body?.type ? newproduct.type = req.body.type : "";

    let product = await newproduct.save()
    res.status(201).send(product);
});

router.delete("/delete/:id", async (req, res) => {
    let productid = req.params.id
    let deleted = await Product.findByIdAndDelete(productid)
    res.status(200).send(deleted);
});


router.get("/get", async (request, response) => {
    try {
        let data = await Product.find({});
        data.reverse()
        await response.status(200).send(data);
    } catch (error) {
        await response.status(401).send("xato");
    }
});


module.exports = router