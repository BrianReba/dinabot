const dinabotController = require('./dinabot/dinabot')

const routes = (app) => {
    app.use(dinabotController)
}

module.exports = routes