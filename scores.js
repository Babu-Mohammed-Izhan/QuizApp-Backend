const mongoose = require('mongoose')


const uri = "mongodb+srv://izhan:izhan@cluster0.airbl.mongodb.net/quizscoresDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


const scoresSchema = new mongoose.Schema({
    username: String,
    score: Number,
})

scoresSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Scores = mongoose.model('Scores', scoresSchema)

module.exports = Scores