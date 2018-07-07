var news_db = require("../models");
var newArticleData = require("../models/newArticleData");

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



  app.post("/api/newarticles", function(req, res) {
    console.log(req.body);
    news_db.newArticle.create({
      Headline: req.body.Headline,
      web_address: req.body.web_address
    })
      .then(function(res) {
        res.json(res);
      });
  });

};