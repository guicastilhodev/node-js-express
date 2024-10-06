let express = require('express');
let app = express();
const path = require('path');

let absolutePath = __dirname + '/views/index.html';
let publicAbsolutePath = path.join(__dirname, '/public');


app.use("/public", express.static(publicAbsolutePath));

app.get("/", function (req, res) {
    res.sendFile(absolutePath);
}); 







































 module.exports = app;
