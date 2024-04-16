require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const app = express();
const gamesRoutes = require('./routes/games.js')

app.use(express.json());

app.use('/api/games', gamesRoutes)

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB and LISTENNING on port: ${PORT} !!!!`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

