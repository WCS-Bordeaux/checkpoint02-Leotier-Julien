var express = require('express');
var fs = require('fs');
var app = express();
var notes = JSON.parse(fs.readFileSync('../mocks/notes.json', 'utf8'));
var users = JSON.parse(fs.readFileSync('../mocks/users.json', 'utf8'));




app.use(express.static('../public'))
var router = express.Router();
router.route('/')
    .get(function (req, res) {
        res.json(notes);
    })
app.use("/notes", router);
var routed = express.Router();
routed.route('/')
    .get(function (req, res) {
        res.json(users);
    })
app.use("/users", routed);
app.listen(9000, function () {
    console.log('app listening on port 9000');
});