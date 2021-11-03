'use strict'

const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');


// We will configure our connection options for production

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

// our connection object
// we are going to use this to connect to Postgres
let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);



const food = require('./food.model');
const clothes = require('./clothes.model');

const foodModel = food(sequelize, DataTypes) // connect model
const clothesModel= clothes(sequelize, DataTypes)

// customerModel.hasMany(orderModel,{foreignKey:'customerId',sourceKey:'id'});
// orderModel.belongsTo(customerModel,{foreignKey:'customerId',targetKey:'id'})

const Collection = require('./collection');

const foodCollection = new Collection(foodModel);
const clothesCollection = new Collection(clothesModel);



module.exports = {
  db: sequelize,

  foodCollection: foodCollection,
  clothesCollection: clothesCollection
};

