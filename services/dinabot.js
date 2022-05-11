const dinabotModel = require('../models/dinabot')

const createBot = async (dinabot) => {
    const dinabotResponse = await dinabotModel.create(dinabot)
    return dinabotResponse
} 

const getBot = async (id) => {
    const dinabotGet = await dinabotModel.getBot(id)
    return dinabotGet
}
//Agregue
const updateBot = async (dinabot) => {
    const dinabotUpdate = await dinabotModel.updateBot(dinabot)
    return dinabotUpdate
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