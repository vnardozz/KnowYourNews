var news_db = require("../models");
var newArticleData = require("../data/newArticleData");
// Routes
// =============================================================
module.exports = function (app) {


  // return random article
  app.get("/api/article", function (req, res) {
    var randomNumber = Math.floor(Math.random() * 55) + 1

    // Finding article, and then returning them to the user as JSON.
    news_db.articles.findAll({
      where: {
        item_id: randomNumber
      }
    }).then(function (result) {
      res.json(result);
    })
  });



  app.post("/api/newarticles", function (req, res) {
    newArticleData.push(req.body).then(function (res) {
    res.json(res);
    });
  });

};