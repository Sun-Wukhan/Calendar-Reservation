require("dotenv").config();


const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log('Connected to Mongo'))

app.use('/api/calendar', require('./Controller/CalendarController'))

app.listen(5000, () => {
    console.log('Server Started')
})
