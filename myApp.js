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

    const messageStyle = process.env.MESSAGE_STYLE;
    
    if(messageStyle === "uppercase") {
        res.json({message: "HELLO JSON"});
    } else {
        res.json({message: "Hello json"});
    }
});







































 module.exports = app;
