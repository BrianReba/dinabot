const mongoose = require('mongoose');
const config = require('../config/config')
const connect = () => {
    mongoose.connect(config.db.mongo)
    .catch(err => {
        console.log(`No se puedo conectar a mongodb ${err}`)
    })

    mongoose.connection.on('connected', () => {
        console.log('Se conecto a mongodb correctamente')
    })
}

module.exports = {
    connect,
    mongoose
}