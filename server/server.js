const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoute = require('./routes/user.routes')
require('dotenv').config({ path: "./config/.env" })
require('./config/database/connexion')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', userRoute)

app.listen(`${process.env.PORT}`, () => {
    console.log(`server listening in port : ${process.env.PORT}`)
})