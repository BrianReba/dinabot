var express = require('express')
var router = express.Router()

router.post('/create', function (req, res) {
    res.json({
        bot: 'created'
    })
    res.status(201)
})

router.get('/dinabot', function (req, res) {
    res.json({
        name: 'Dinabot', 
        author: 'Dinacompany', 
        date: new Date()
    })
    res.status(200)
})


module.exports = router