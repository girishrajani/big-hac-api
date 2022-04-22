const express = require('express');

const router = express.Router()

const Ticket = require('../models/model');

router.post('/post', async (req, res) => {
    const data = new Ticket({
        email: req.body.email,
        desig: req.body.desig,
        phone: req.body.phone,
        cat: req.body.cat,
        subject: req.body.subject,
        desc: req.body.desc,
        keywords: req.body.keywords
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const data = await Ticket.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;

