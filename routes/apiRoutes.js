var db = require("../models");

function getRandommNumber() {
    Math.floor(Math.random() * 55)+1
    return 
   };

// Routes
// =============================================================
module.exports = function(app) {

  // shows all articles
  app.get("/api/article", function(req, res) {

    // Finding all articls, and then returning them to the user as JSON.
    db.news_db.find({
        where:
       {
         item_id: getRandommNumber()
       }
   }).then(function(res) {
       res.json(res);
   })
     console.log(res)
  });




 
    // POST route for saving a new todo. You can create a todo using the data on req.body
    // app.post("/api/results", function(req, res) {

    // });


};
