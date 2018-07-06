var path = require("path");

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads index.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/index.html"));
    });
  
    // quiz route loads quiz.html
    app.get("/quiz", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/quiz.html"));
    });
  
    // results route loads results.html
    app.get("/results", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/results.html"));
    });
  
  
  };