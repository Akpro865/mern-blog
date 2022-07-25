const Category = require("../models/Category");

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  }

module.exports = { createCategory, getCategories}