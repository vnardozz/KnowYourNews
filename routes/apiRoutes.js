var db = require("../models");

function getRandommNumber() {
  Math.floor(Math.random() * 55)+1
  return 
}

// Routes
// =============================================================
module.exports = function(app) {

  // return random article
  app.get("/api/article/:id", function(req, res) {

    // Finding article, and then returning them to the user as JSON.
    news_db.articles.findOne({
      where:
        {
          id: req.params.RandommNumber()
        }
    }).then(function(res) {
        res.json();
    })
      console.log(res)
   });



};