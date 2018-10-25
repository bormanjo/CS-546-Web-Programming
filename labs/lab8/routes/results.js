const express = require("express");
const router = express.Router();
const palindromeChecker = require("../palCheck");
const exphbs = require("express-handlebars");



router.post("", (req, res) => {
    var title = "The Palindrome Results!";
    var start_tag = "<p class=\"[CLASS]\">";
    var end_tag = "</p>";
    var type, message

    var text = req.body["text-to-test"];

    var response = {title: title};

    if (text === ""){

        res.status(400);

        start_tag = start_tag.replace("[CLASS]", "error");

        response.error = start_tag + "Error: No text provided to the form" + end_tag;

        res.status(400)

    } else {

        var is_palindrome = palindromeChecker(text);
        console.log("is palindrome?: ", is_palindrome);

        if (is_palindrome){
            type = "success"
            message = "You've entered a palindrome!"
        } else {
            type = "failure";
            message = "This is not a palindrome"
        }

        start_tag = start_tag.replace("[CLASS]", type);

        var output = start_tag + text + end_tag;
        message = "<p>" + message + "</p>"

        response = {output: output, palText: message}
    }

    console.log(response);

    res.render("results", response);

});

module.exports = router;