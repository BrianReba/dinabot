const dinabotModel = require('../models/dinabot')

const createBot = async (dinabot) => {
    const dinabotResponse = await dinabotModel.create(dinabot)
    return dinabotResponse
} 

module.exports = {
    createBot
}