const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');
const { setApiKey } = require('@sendgrid/mail');

const PORT = process.env.PORT || 3030;
const app = express();


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

    sendGrid.setApiKey('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')

    const msg = {
        to: 'zacharybryan@icloud.com',
        from: 'zacharybryan@icloud.com',
        subject: 'Portfolio Contact',
        text: req.body.message,
    }

    sendGrid
        .send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });
        })
    .catch(err => {
        console.log('error:', err);
        res.status(401).json({
            success: false
        })
    })
});


app.listen(PORT, function() {
    console.log('listening on port ' + PORT);
});
