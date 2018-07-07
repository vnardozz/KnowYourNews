var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    var newArticleArray = sequelize.define("newarticles", {
        item_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            omitNull: true
            
          },
        Headline: DataTypes.STRING,
        web_address: DataTypes.STRING,
        is_real: DataTypes.BOOLEAN,
        }, {
         timestamps: false
        });
        
        return newArticleArray;

    };
    
        
        
        
        
        //item_id: {
        //type: DataTypes.INTEGER,
        //allowNull: true
        //},
        //Headline: DataTypes.STRING,
        //web_address: DataTypes.STRING,
        //is_real: {
            //type: DataTypes.BOOLEAN,
            //allowNull: true
        //},

   



