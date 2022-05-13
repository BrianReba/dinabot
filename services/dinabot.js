const dinabotModel = require('../models/dinabot')
const { APIError, ErrorTypes } = require('../utils/Errors')

const createBot = async (dinabot) => {
    const dinabotResponse = await dinabotModel.create(dinabot)
    return dinabotResponse
} 

const getBot = async (id) => {
    const dinabotGet = await dinabotModel.getBot(id)
    return dinabotGet
}
//Agregue
const updateBot = async (id, dinabot) => {
    try {
        const dinabotUpdate = await dinabotModel.updateBot(id, dinabot)
        return dinabotUpdate
    } catch (error) {
        throw new APIError(ErrorTypes.INTERNAL_SERVER_ERROR, 'Internal server error')
    }
}
//Agregue
const deleteBot = async (id) => {
    const dinaDelete = await dinabotModel.deleteBot(id)
    return dinaDelete
}

module.exports = {
    createBot,
    getBot,
    updateBot,
    deleteBot,

}