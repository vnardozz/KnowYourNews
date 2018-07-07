var news_db = require("../models");
var newArticle = require("../models/newArticleData");

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
    var itemid;
    news_db.articles.create({
      //item_id: itemid++,
      Headline: req.body.Headline,
      web_address: req.body.web_address,
      is_real: req.body.is_real
    })
      .then(function(result) {
        res.json(result);
      });
  });

};