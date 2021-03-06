// import AdStatus from "../enums/AdStatus";

const formatProductSchema = () => {
  const sample = {
    title: "Food",
    subcategoryId: "38383838383",
    adStatus: "Draft",
    school: "FUTA",
    price: "20000",
    delivery: true,
    gender: "male",
    type: "Versace",
    condition: "good",
  };

  const data = sample;

  const dbEntity = {
    title: data.title,
    subcategoryId: data.subcategoryId,
    adStatus: data.adStatus,
    school: data.school,
    price: data.price,
    delivery: data.delivery,
  };
  const allNecessaryKeys = [
    "title",
    "subcategoryid",
    "adstatus",
    "school",
    "price",
    "delivery",
  ];
  const otherFields = Object.keys(data).map((key) => {
    if (!allNecessaryKeys.includes(key.toLowerCase())) {
      return {
        [key]: data[key],
      };
    }
  });

  console.log(otherFields.filter((item) => item != undefined));
};

formatProductSchema();
