const express = require('express')
const configRoutes = require('./routes')
const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
configRoutes(app);


app.listen(port, function(){ 
    console.log("app is ready"); 
    console.log(`App listening on port ${port}`);
}); 
