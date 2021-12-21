'use strict'
// Connects to our database depending on the URI as an environmental variable
const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// require both the Sequelize and Datatype  constructor from the sequelize package
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



const catagories = require('./food.model');
const Books = require('./clothes.model');

const catagoriesModel = catagories(sequelize, DataTypes) // connect model
const BooksModel= Books(sequelize, DataTypes)

// customerModel.hasMany(orderModel,{foreignKey:'customerId',sourceKey:'id'});
// orderModel.belongsTo(customerModel,{foreignKey:'customerId',targetKey:'id'})

const Collection = require('./collection');

const catagoriesCollection = new Collection(catagoriesModel);
const booksCollection = new Collection(BooksModel);



module.exports = {
  db: sequelize,

  catagoriesCollection: catagoriesCollection,
  booksCollection: booksCollection // this step is used to create a new table
};

