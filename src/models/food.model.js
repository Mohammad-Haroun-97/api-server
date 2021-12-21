// Our table schema
const catagories = (sequelize, DataTypes) => sequelize.define('catagories', {

  
    normalized_name: {
      type: DataTypes.STRING,
      allowNull:false
  },
    Display_Name: {
      type: DataTypes.STRING,
      allowNull:false
  },
    Description: {
      type: DataTypes.STRING,
      allowNull:false
  },

 


  
  });
  
  module.exports = catagories;