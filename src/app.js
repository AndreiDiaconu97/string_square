// basic setup
const app = require('express')();
const bodyParser = require('body-parser');
const string_square = require('./string_square');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// endpoints
app.get('/', (req, res) => {
    res.json({ msg: 'Hello world!' });
});

app.get('/square', (req, res) => {
    const sq = string_square(req.query.string);
    res.json({ result: sq });
  });

module.exports = app;