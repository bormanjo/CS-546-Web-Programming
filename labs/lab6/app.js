
const express = require('express')  // Import express module
const app = express()               // Define app as the express web-server
const port = 3000                   // Default port

// Import data
const story = require("./data/story.json")
const about = require("./data/about.json")
const education = require("./data/education.json")

// For the "/about" url send back 'the about page'
app.get("/about", (req, res) => res.send(about))

// For the "/story" url send back 'the about page'
app.get("/story", (req, res) => res.send(story))

// For the "/about" url send back 'the about page'
app.get("/education", (req, res) => res.send(education))

// Declare the app to listen on port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))
