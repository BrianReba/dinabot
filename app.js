const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const dinabotRoutes = require('./controllers/dinabot')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(dinabotRoutes)

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000")
})

app.use('*', (req, res, next) => {
    return res
      .status(200)
      .send('Dinabot Api')
})