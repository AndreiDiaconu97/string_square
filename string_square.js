var bodyParser = require('body-parser');

// basic setup
const app = require('express')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/square", (req, res) => {

    let square = string_square(req);
    res.send(square);
});

var port = process.env.PORT || 3000;
app.listen(port, () => console.log("server running on port " + port));


function string_square(s) {
    return "prova"
}