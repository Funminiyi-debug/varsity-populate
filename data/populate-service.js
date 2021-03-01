const Service = require("../models/Services");
const AppFile = require("../models/AppFile");

const DO = async () => {
  const image = new AppFile({
    name: "Appfile 1",
  });
  const response = await image.save();
  const service = new Service({
    name: "Service 1",
    category: "602a527ebf675e2894288717",
    image: response._id,
  });
  const saved = await service.save();
  return saved;
};

module.exports = DO;
