const resultRoutes = require("./results");
const path = require("path");

const constructorMethod = app => {
  // Otherwise:
  app.use("/results", resultRoutes);
  app.get("/", (req, res) => {
    res.render("home", {title: "The Best Palindrome Checker in the World!"});
  });
};

module.exports = constructorMethod;
