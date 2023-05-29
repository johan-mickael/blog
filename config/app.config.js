const express = require('express');
const bodyParser = require('body-parser');
const setupGlobalRoutes = require('../routes/globalRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

setupGlobalRoutes(app);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


module.exports = app;