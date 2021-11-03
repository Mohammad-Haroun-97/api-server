
'use strict';

const express = require('express');

const router = express.Router();

const {foodCollection} = require('../models/index');
router.get('/food',getfood);
router.get('/food/:id',getfood);
router.post('/food',createfood);
router.put('/food/:id',updateFood);
router.delete('/food/:id',deleteFood);





async function getfood(req,res) {
  const id = parseInt(req.params.id);

    let food = await foodCollection.read(id);
    res.status(200).json(food);
}

async function createfood(req,res) {
    let newCusInfo = req.body;
    let food = await foodCollection.create(newCusInfo);
    res.status(201).json(food);
}

async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foodItem = await foodCollection.update(id,obj);
  res.status(201).json(foodItem);
}
async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let foodItem =await foodCollection.delete(id);
  res.status(204).json(foodItem);
}


module.exports = router;



// const express = require('express');

// const { food } = require('../models/index');

// const foodRouter = express.Router();



// // RESTful Route Delectation 
// foodRouter.get('/food', getfood); // get all the people form the DB
// foodRouter.get('/food/:id', getOnefood); // gets a person by ID
// foodRouter.post('/food', createfood); // creating a new person
// foodRouter.put('/food/:id', updatefood); // updating a person by their ID
// foodRouter.delete('/food/:id', deletePiece); // deleting a person by their ID


// async function getfood(req, res) {

//   const allPieces = await food.findAll();
//   res.status(200).json(allPieces);

// }

// async function getOnefood(req, res) {
//   const id = parseInt(req.params.id); // we parse the ID in case it was a string
//   const onePiece = await food.findOne({
//     where: {
//       id: id
//     }
//   });
//   res.status(200).json(onePiece);
// }

// async function createfood(req, res) {
//   const obj = req.body;
//   let newPiece = await food.create(obj);
//   res.status(201).json(newPiece);

// }

// async function updatefood(req, res) {
//   const id = parseInt(req.params.id);
//   const obj = req.body;
//   let foundfood = await food.findOne({ where: { id: id } });
//   const updatedfood = await foundfood.update(obj);
//   res.status(201).json(updatedfood);
// }

// async function deletePiece(req, res) {
//   const id = parseInt(req.params.id);
//   const deletedPiecee = await food.destroy({ where: { id } });
//   res.status(204).json(deletedPiecee);
// }

// module.exports = foodRouter;