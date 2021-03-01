const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppFileSchema = Schema({
  name: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  services: [{ type: Schema.Types.ObjectId, ref: "Service" }],
});

module.exports = mongoose.model("AppFile", AppFileSchema);
