var bodyParser = require('body-parser');

// basic setup
const app = require('express')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/square", (req, res) => {
    if (Object.keys(req.query).length === 1) {
        let s = req.query.string;

        if (typeof s === 'string' || s instanceof String) {
            let square = string_square(s);
            res.status(200);
            res.send({ result: square });
        } else {
            res.status(400);
            res.send({ result: -1 });
        }
    } else {
        res.status(200);
        res.end();
    }
});

function string_square(s) {
    let square;
    square = s.length * s.length;
    return square;
}

var port = process.env.PORT || 3000;
app.listen(port, () => console.log("server running on port " + port));
