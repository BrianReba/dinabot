const dinabotController = require('./dinabot/dinabot')
const questionController = require('./dinabot/question')

const routes = (app) => {
    app.use('/dinabot',dinabotController)
    app.use('/question', questionController)
}

module.exports = routes