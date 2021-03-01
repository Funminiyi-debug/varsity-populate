const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceSchema = Schema({
  name: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  image: { type: Schema.Types.ObjectId, ref: "AppFile" },
});

module.exports = mongoose.model("Service", ServiceSchema);
