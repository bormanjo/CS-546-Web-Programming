const express = require("express");
const router = express.Router();
const palindromeChecker = require("../palCheck")
router.post("/results", (req, res) => {
    var start_tag = "<p class=\"[CLASS]\">";
    var end_tag = "</p>"

    var text = req.body;
    console.log(text);
    console.log(text["text-to-test"]);
    var is_palindrome = palindromeChecker(text);
    console.log("")
});

module.exports = router;