require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3001;
const Scores = require('./scores');
const cors = require('cors')
app.use(cors())

app.use(express.static('build'))

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Starting on PORT 3001")
})

app.get('/api/scores', async (req, res) => {
    allscores = await Scores.find({})
    if (allscores) {
        res.json(allscores)
    }
})

app.post('/api/scores', async (req, res) => {
    const body = req.body
    console.log(req.body)

    const scores = new Scores({
        username: body.username,
        score: body.score
    })

    const savedscore = await scores.save()
    res.json(savedscore)
})

