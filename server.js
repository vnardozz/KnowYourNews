var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models"); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static content for the app from the "public" directory in the application directory.

// had to change from "public" to __dirname to correct MIME type issue when serving through node
app.use(express.static(__dirname));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// var routes = require("./controllers/catsController.js");

//NEED TO REQUIRE THIS APIROUTES PAGE WHENN COMPLETE
require("./routes/apiRoutes.js")(app);
require ("./routes/htmlRoutes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});

