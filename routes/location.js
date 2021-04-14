const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Location = require('../models/locationModel');

//ROUTES//

router.get('/favorites', async (req, res, next) => {
    try {
        let response = await Location.find();
        res.json(response)
    } catch (err) {
        res.json(err)
    }
})

router.get('/:ip', async (req, res, next) => {
    console.log(req.params.ip)
    let response = await fetch(`http://ip-api.com/json/${req.params.ip}`);
    let data = await response.json()
    res.json(data)
})

router.post('/saveLocation', async (req, res, next) => {
    console.log(req.body);
    console.log(req.body.country)
    const location = new Location({
        ip: req.body.ip,
        country: req.body.country,
        city: req.body.city,
        region: req.body.region,
        timezone: req.body.timezone,
        organization: req.body.organization
    })
    let savedLocation = await location.save();
    res.json(savedLocation)
})

router.put('/put', async (req, res, next) => {
    console.log(req.body)
    await Location.findByIdAndDelete(req.body._id);

    let location = new Location({
            ip: req.body.ip, 
            country: req.body.country, 
            city: req.body.city, 
            region: req.body.region, 
            timezone: req.body.timezone, 
            organization: req.body.organization
        });
    let addedLocation = await location.save();
    res.json(addedLocation);
})

router.delete('/delete/:id', async (req, res, next) => {
    console.log(req.params)
    let id = req.params.id
    try {
        let response = await Location.findByIdAndDelete(id)
        res.json(response)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;