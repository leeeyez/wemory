const controller = require("../controllers/diary.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new community
  app.post("/api/diary/create", controller.create);

  // Retrieve all community
  app.get("/api/diary", controller.findAll);

  // Retrieve a single community with id
  app.get("/api/diary/:id", controller.findOne);
};