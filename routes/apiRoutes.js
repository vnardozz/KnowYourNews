var db = require("../models");
var news_db = require("../models");



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


  // return random article
  app.get("/api/article", function(req, res) {
    var randomNumber= Math.floor(Math.random() * 55)+1

    // Finding article, and then returning them to the user as JSON.
    news_db.articles.findAll({
      where: {
        item_id: randomNumber
      }
    }).then(function(result) {
        res.json(result);
    })
   });

   app.get("/api/art", function(req, res) {

    // Finding article, and then returning them to the user as JSON.
    news_db.News.create({
      item_id: 56,
      Headline: "hello"      
    }).then(function(result) {
        res.json(result);
    })
   });

//adding new article and headline
   app.post("/api/results", function(req, res) {
    // Create a new entry with the data available to us in req.body
    console.log(req.body);
    db.NewArticle.create(req.body).then(function(dbNewArticle) {
      res.json(dbNewArticle);
    });
  });


};
