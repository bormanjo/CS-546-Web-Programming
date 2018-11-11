const express = require("express");
const bodyParser = require("body-parser");
const middleware = require("./middleware")
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine(".hbs", exphbs({defaultLayout: "main", extname: ".hbs"}));
app.set("view engine", ".hbs")

const port = 3000;
const debug = false;

// BEGIN Routes

// GET /
app.get("/", function(req, res) {
    if (debug) console.log('[DEBUG] Cookies: ', req.cookies);

    let response = {title: "Authentication App", page: "Login"};

    if (req.query.error !== 'undefined' && req.query.error){
        response.error = req.query.error;
    }

    res.render("home", response)
});

// POST login
app.post("/login", middleware.login);

// GET /private
app.get("/private", middleware.private);

// GET /logout
app.get("/logout", middleware.logout);

// ALL
app.all("/", function(req, res) {
    if (debug) console.log('[DEBUG] Cookies: ', req.cookies);
});

// Catch all
app.use(function(req, res) {
    res.redirect("/")
})

// END Routes

// START server

app.listen(3000, function() {
    console.log(`Server is live at http://localhost:${port}`);
    if (process && process.send) process.send({done: true});
});