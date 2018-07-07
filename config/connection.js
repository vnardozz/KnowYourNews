//need to create our connection to server
var mysql = require("mysql");
//if( process.env.JAWSDB_URL){
  connection = mysql.createConnection("mysql://voiozsc7zhxl706t:rzhjh2c0jt9hp4jo@g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s6lqyh8j573fzm7k");
  /*
}else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  // password: "",
  database: "news_db"
});
};
*/
// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;