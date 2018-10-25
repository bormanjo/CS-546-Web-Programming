const resultRoutes = require("./results");
const path = require("path");

const constructorMethod = app => {
  app.use("/results", resultRoutes);
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("static/home.html"));
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;