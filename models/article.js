// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
//var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
//var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
// Creates a "News" model that matches up with DB
var News = sequelize.define("article", {
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
    },
    Headline: DataTypes.STRING,
    web_address: DataTypes.STRING,
    is_real: DataTypes.BOOLEAN,
    },
    {timestamps: false}
);

return News;
// Syncs with DB
//News.sync();
};
// Makes the News Model available for other files (will also create a table)
//module.exports = News;