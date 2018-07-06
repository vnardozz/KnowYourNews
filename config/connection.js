//need to create our connection to server
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3310,
  user: "root",
<<<<<<< HEAD
  password: "password",
=======
  password: "Dltbw1478vn",
>>>>>>> 5a3c245bdf6adc04fe3afbb12c4dcc88741111a2
  database: "news_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

