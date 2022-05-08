const express = require('express')
const router = express.Router()
const dinabotService = require('../../services/dinabot')

router.post('/create', async function (req, res) {
    const dinaResponse = await dinabotService.createBot(req.body)
    res.json(dinaResponse)
    res.status(201)
})

router.get('/get', async function (req, res) {
    const dinaGet = await dinabotService.getBot(req.body.id)
    res.json(dinaGet)
    res.status(200)
})


module.exports = router