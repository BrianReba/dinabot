require('dotenv').config();
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const config = require('./config/config')
const dinabotRoutes = require('./controllers/dinabot')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(dinabotRoutes)

app.listen(config.api.port, () => {
 console.log(`El servidor está inicializado en el puerto ${config.api.port}`)
})

app.use('*', (req, res, next) => {
    return res
      .status(200)
      .send('Dinabot Api')
})