require('dotenv').config();
let express = require('express');
let app = express();
const path = require('path');

let absolutePath = __dirname + '/views/index.html';
let publicAbsolutePath = path.join(__dirname, '/public');

app.use(express.static(publicAbsolutePath));

app.get("/", function (req, res) {
    res.sendFile(absolutePath);
}); 

app.get ("/json", function (req, res) {

    
    if( process.env["MESSAGE_STYLE"] === "uppercase") {
        res.json({message: "Hello json".toUpperCase()});
    } else {
        res.json({message: "Hello json"});
    }
});







































 module.exports = app;
