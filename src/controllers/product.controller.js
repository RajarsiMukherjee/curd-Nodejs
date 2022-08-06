const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");


//post
router.post("", async function (req, res) {
    try {
        const product = await Product.create(req.body)
        return res.status(201).send(product)
    }
    catch (err) {
        return res.send.status(500).send(err.message);
    }
})

// get
router.get("", async function (req, res) {
    try {
        const product = await Product.find().lean().exec();
        return res.status(201).send(product)

    }
    catch (err) {
        return res.sendStatus(500).send(err.message);
    }
})

//update

router.patch("/:id", async function (req, res) {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();
        //console.log(product);
        return res.status(201).send(product);
    } catch (err) {
        return res.send.status(500).send(err.message);
    }
});

// delete

router.delete("/:id", async function (req, res) {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(product)

    }
    catch (err) {
        return res.send.status(500).send(err.message);
    }
});

//export

module.exports = router;
