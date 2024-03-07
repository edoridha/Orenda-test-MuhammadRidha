require("dotenv").config();

const express = require('express')
const app = express()
const port = 3000
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api',require('./routes/index'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})