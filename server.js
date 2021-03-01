const app = require("express")();
const port = 10000;
const mongoose = require("mongoose");
const Services = require("./models/Services");
const Category = require("./models/Category");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://FunminiyiAdmin:#Password101@localhost:20000/testdb?authSource=admin",
      {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      }
    );
    console.log(`DB connected successfully to ${connection.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

connectDb();

app.get("/", async (req, res) => {
  const populateCategory = require("./data/populate-category");
  const populateService = require("./data/populate-service");
  const data = await populateService();
  //   const data = await populateCategory();
  const services = await Services.find({})
    .populate("category")
    .populate("image");
  const categories = await Category.find({}).populate("services");
  res.json({ payload: { services } });
});

app.listen(port, () => console.log("app listening on port " + port));
