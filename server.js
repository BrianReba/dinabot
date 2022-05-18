require('dotenv').config();
const app = require('./app')
const mongodb = require('./db/mongoose')
const config = require('./config/config')

mongodb.connect()

app.listen(config.api.port, () => {
    console.log(`El servidor está inicializado en el puerto ${config.api.port}`)
})


