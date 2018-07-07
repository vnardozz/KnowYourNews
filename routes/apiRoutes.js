var news_db = require("../models");
var newArticle = require("../models");

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
      item_id: req.body.item_id,
      Headline: req.body.Headline,
      web_address: req.body.web_address,
      is_real: req.body.is_real
    })
      .then(function(res) {
        res.json(res);
      });
  });

};