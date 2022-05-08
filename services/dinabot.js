const dinabotModel = require('../models/dinabot')

const createBot = async (dinabot) => {
    const dinabotResponse = await dinabotModel.create(dinabot)
    return dinabotResponse
} 

const getBot = async (id) => {
    const dinabotGet = await dinabotModel.getBot(id)
    return dinabotGet
}

module.exports = {
    createBot,
    getBot,

}