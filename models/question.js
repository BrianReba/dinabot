const { mongoose } = require('../db/mongoose')

const question = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    text: String,
    questionType: String,
    responseType: String,
    path: String,
    internalName: String,
    position: {
        left: Number,
        top: Number
    }
})

module.exports = {
    question
}