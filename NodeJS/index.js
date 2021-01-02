const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./db.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

const SchtroumpfController = require('./controllers/schtroumpfController');
const AdminController = require('./controllers/AdminController');
app.use('/Schtroumpf', SchtroumpfController);
app.use('/Admin', AdminController);