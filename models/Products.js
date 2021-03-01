const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Product", ProductSchema);
