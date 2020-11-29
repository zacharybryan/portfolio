const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const app = express();
const PORT = 8080; 

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res) => {
    res.send('API Status: WORKING')
});

app.post('/api/email', (req, res, next) => {
    console.log(req.body);

    sendGrid.setApiKey('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');
});

app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});