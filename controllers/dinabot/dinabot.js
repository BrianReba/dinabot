const express = require('express')
const router = express.Router()
const dinabotService = require('../../services/dinabot')

router.post('/', async function (req, res) {
    try {
        const dinaResponse = await dinabotService.createBot(req.body)
        res.json(dinaResponse)
        res.status(201)
    } catch (error) {
        res.json(error.message)
        res.status(error.status)
    }

})

router.get('/', async function (req, res) {
    try {
        const dinaGet = await dinabotService.getBot(req.query.id)
        res.json(dinaGet)
        res.status(200)
    } catch (error) {
        res.json(error.message)
        res.status(error.status)
    }
})

//Agregue
router.put('/', async function (req, res) {
    try {
        const dinaUpdate = await dinabotService.updateBot(req.query.id, req.body)
        res.json(dinaUpdate)
        res.status(200)
    } catch (error) {
        res.json(error.message)
        res.status(error.status)
    }
})

//Agregue
router.delete('/', async function (req, res) {
    try {
        const dinoDelete = await dinabotService.deleteBot(req.body)
        res.json(dinoDelete)
        res.status(200)
    } catch{
        res.json(error.message)
        res.status(error.status)
    }
})

module.exports = router