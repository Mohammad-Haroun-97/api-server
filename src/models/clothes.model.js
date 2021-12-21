// Our table schema
const Books = (sequelize, DataTypes) => sequelize.define('Books', {

  name: {
    type: DataTypes.STRING,
    allowNull:false
},
description: {
    type: DataTypes.STRING
},
price: {
    type: DataTypes.INTEGER
},
inventoryCount: {
    type: DataTypes.INTEGER
},
image: {
    type: DataTypes.STRING
},
catagory: {
    type: DataTypes.STRING
}

  });
  
  module.exports = Books;