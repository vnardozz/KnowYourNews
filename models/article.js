// Dependencies
// =============================================================

module.exports = function (sequelize, DataTypes) {
  // Creates a "Articles" model that matches up with DB
  var Articles = sequelize.define("articles", {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Headline: DataTypes.STRING,
    web_address: DataTypes.STRING,
    is_real: DataTypes.BOOLEAN,
  }, {
    timestamps: false
  });

  return Articles;

};