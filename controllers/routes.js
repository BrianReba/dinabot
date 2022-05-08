const dinabotController = require('./dinabot/dinabot')

const routes = (app) => {
    app.use('/dinabot',dinabotController)
}

module.exports = routes