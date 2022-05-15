const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const routes = require('./controllers/routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
routes(app)

app.use('*', (req, res, next) => {
    return res
      .status(200)
      .send('Dinabot Api')
})

module.exports = app