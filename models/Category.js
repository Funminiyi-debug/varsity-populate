const mongoose = require("mongoose");
const Product = require("./Products");

const Schema = mongoose.Schema;

const CategorySchema = Schema({
  name: { type: String },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  services: [{ type: Schema.Types.ObjectId, ref: "Service" }],
});

CategorySchema.pre("remove", function (next) {
  Product.remove({ category: this._id }).exec();
  next();
});

module.exports = mongoose.model("Category", CategorySchema);
