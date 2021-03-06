const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv/config');

const port = process.env.PORT || 5050;
app.use(cors(corsOptions));

const LocationRoutes = require('./routes/location');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//Middleware//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get('/', (req, res, next) => {
    res.send('Welcome')
})

app.get('/hi', (req, res) => {
    res.send('Working?')
})

app.use('/location', LocationRoutes);

//CONNECTION TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,  useUnifiedTopology: true});

//LISTENING
app.listen(port, () => {
    console.log(`IP_Addresses App listening on port ${port}`)
})