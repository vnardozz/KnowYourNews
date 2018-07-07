//var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var newArticle = sequelize.define("NewArticle", {
        item_id: {
        type: DataTypes.INTEGER,
        allowNull: true
        },
        Headline: DataTypes.STRING,
        web_address: DataTypes.STRING,
        is_real: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },

    });

    return newArticle;
  };
  
