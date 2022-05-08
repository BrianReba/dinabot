const express = require('express')
const router = express.Router()
const dinabotService = require('../../services/dinabot')

router.post('/create', async function (req, res) {
    const dinaResponse = await dinabotService.createBot(req.body)
    res.json(dinaResponse)
    res.status(201)
})

router.get('/get', function (req, res) {
    res.json({
        name: 'Dinabot', 
        author: 'Dinacompany', 
        date: new Date()
    })
    res.status(200)
})


module.exports = router