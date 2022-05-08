require('dotenv').config();
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const config = require('./config/config')
const routes = require('./controllers/routes')
const mongodb = require('./db/mongoose')

mongodb.connect()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
routes(app)

app.listen(config.api.port, () => {
 console.log(`El servidor está inicializado en el puerto ${config.api.port}`)
})

app.use('*', (req, res, next) => {
    return res
      .status(200)
      .send('Dinabot Api')
})