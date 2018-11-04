const resultRoutes = require("./results");

const constructorMethod = app => {
  // Otherwise:
  app.use("/", resultRoutes);
  app.get("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
