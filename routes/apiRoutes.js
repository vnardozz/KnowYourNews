var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // return random article
  app.get("/api/articles", function(req, res) {

    // Finding all articls, and then returning them to the user as JSON.
    db.article.findAll({}).then(function(results) {
        res.json(results);
    })

   });
 


};