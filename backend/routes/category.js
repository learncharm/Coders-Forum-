const express = require('express');
const Category = require('../models/Category');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Route 1 : Create a Category using : POST "/api/category/addcategory".  No login required

router.post('/addcategory', [
  body('title', 'Enter a valid Title').isLength({ min: 3 }),
  body('description', 'Enter a valid Description').isLength({ min: 5 })
], async (req, res) => {

  try {
    // If there are errors , return bad request and the errors
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    let category = await Category.create({
      title: req.body.title,
      description: req.body.description,
    })
    success = true;
    res.json({success , category});
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// Route 2 : Fetch All Categories using : POST "/api/category/fetchallcategory".  No login required

router.get('/fetchallcategory', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
})

// Route 3 : Delete an existing Category using : DELETE "api/category/deletecategory". No Login Required

router.delete('/deletecategory/:id', async (req, res) => {

  try {
      // let success = false;

      // Find the note to be deleted and delete it
      let category = await Category.findById(req.params.id);
      if (!category) {
          return res.status(404).send("Not Found");
      }

      category = await Category.findByIdAndDelete(req.params.id);
      // success = true;
      res.json({ Success: "Category has been Deleted" });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

module.exports = router;