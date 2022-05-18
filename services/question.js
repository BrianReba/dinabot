const questionModel = require('../models/dinabot')
const { APIError, ErrorTypes } = require('../utils/Errors')

const addQuestion = async (question, id) => {
    const questionModelBot = await questionModel.addQuestion(question, id)
    return questionModelBot
} 

module.exports = {
    addQuestion,
}