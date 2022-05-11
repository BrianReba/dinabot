const express = require('express')
const res = require('express/lib/response')
const { restart } = require('nodemon')
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
//Agregue
router.put('/update', async function (req, res) {
    const dinaUpdate = await dinabotService.updateBot(req.body)
    res.json(dinaUpdate)
    res.status(200)
})
//Agregue
router.delete('/delete', async function (req, res) {
    const dinoDelete = await dinabotService.deleteBot(req.body.id)
    res.json(dinoDelete)
    res.status(200)
})

module.exports = router