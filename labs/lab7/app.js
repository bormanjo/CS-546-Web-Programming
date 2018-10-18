const express = require('express')
const mongoose = require('mongoose')
const configRoutes = require('./routes')
const bodyParser = require("body-parser")

const app = express()
const port = 3000

app.use(bodyParser.json);
configRoutes(app);

app.on('ready', function() { 
    app.listen(port, function(){ 
        console.log("app is ready"); 
        console.log(`App listening on port ${port}`);
    }); 
});

mongoose.connect( "mongodb://localhost/mydb" ); mongoose.connection.once('open', function() { 
    // All OK - fire (emit) a ready event. 
    app.emit('ready'); 
});