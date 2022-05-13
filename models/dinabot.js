const { mongoose } = require('../db/mongoose')
const { question } = require('./question')

const dinabot = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    questionList: [question]
})


const DinabotModel = mongoose.model('Dinabot', dinabot)

const create = async (dinabot) => {
    const dinabotObject = {
        _id: new mongoose.Types.ObjectId(),
        name: dinabot.name,
        questionList: dinabot.questionList
    }

    const model = new DinabotModel(dinabotObject)
    await model.save()
    return dinabotObject
}

const getBot = async (id) => {
    const dinaOption = await DinabotModel.findOne({
        _id: id
    }) 
    return dinaOption
}

const updateBot = async (id, dinabot) => {

    const dinabotUpdate = {
        name: dinabot.name,
        questionId: dinabot.questionId
    }
    
    const updatedBot = await DinabotModel.findOneAndUpdate({
        _id: id
        
    }, dinabotUpdate, {new: true})
 
    return updatedBot
 }

const deleteBot = async (id) => {
    await DinabotModel.deleteOne({
        _id: id
    })
    return 'Borrado correctamente'
}

const addQuestion = async (question, id) => {
    question._id = new mongoose.Types.ObjectId()

    const dinabot = await DinabotModel.findOneAndUpdate({
        _id: id

    },
    {
        $push: { questionList: question }
    },
    {new: true}) 

    return dinabot
   
}

module.exports = {
    create,
    getBot,
    deleteBot,
    updateBot,
    addQuestion,
}