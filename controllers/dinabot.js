var express = require('express')
var router = express.Router()

router.post('/create', function (req, res) {
    res.json({
        bot: 'created'
    })
    res.status(201)
})

module.exports = router