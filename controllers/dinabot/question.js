const express = require('express')
const router = express.Router()
const questionService = require('../../services/question')


router.post('/', async function (req, res) {
    try { 
        const response = await questionService.addQuestion(req.body, req.query.id )
        res.json(response)
        res.status(201)
    } catch (error) {
        res.json(error.message)
        res.status(error.status)
    }

})


module.exports = router