const express = require("express");

const router = express.Router();

const Contact=require('../models/userModel')



router.get("/contact", async (req, res) => {
    try {
        const result = await Contact.find()
        res.send({ response: result, message: "getting contacts " });
    } catch (error) {
        res.status(400).send({ message: "can not get contacts" });
    }
});



router.get("/contact/:id", async (req, res) => {
    try {
        const result = await Contact.findOne({ _id: req.params.id });
        res.send({ response: result, message: "getting contact " });
    } catch (error) {
        res.status(400).send({ message: "there is no contact with this id" });
    }
});


router.delete("/contact/:id", async (req, res) => {
    try {
        const result = await Contact.deleteOne({ _id: req.params.id });
        result.n ? res.send({ response: "contact deleted" }) :
            res.send({message:"there is no contact with this id "});

    } catch (error) {
        res.status(400).send({ message: "there is no contact with this id" });
    }
});



module.exports = router;