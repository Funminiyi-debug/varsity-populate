const Category = require("../models/Category");

const DO = async () => {
  const category = new Category({
    name: "Category 1",
  });
  const saved = await category.save();

  return saved;
};

module.exports = DO;
