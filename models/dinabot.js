const { mongoose } = require('../db/mongoose')

const dinabot = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    questionId: mongoose.Schema.Types.ObjectId
})


const DinabotModel = mongoose.model('Dinabot', dinabot)

const create = async (dinabot) => {
    const dinabotObject = {
        _id: new mongoose.Types.ObjectId(),
        name: dinabot.name,
        questionId: new mongoose.Types.ObjectId()
    }

    const model = new DinabotModel(dinabotObject)
    await model.save()
    return dinabotObject
}

module.exports = {
    create
}