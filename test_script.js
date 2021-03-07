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
  const otherFields = Object.keys(data)
    .map((key) => {
      if (!allNecessaryKeys.includes(key.toLowerCase())) {
        return {
          [key]: data[key],
        };
      }
    })
    .filter((item) => item != undefined);

  dbEntity.otherFields = otherFields;

  console.log("the entity we want to test ", dbEntity);
  return dbEntity;
};

const formatProduct_Service = (payload) => {
  if (Array.isArray(payload)) {
    payload = payload.map((element) => {
      if (element.otherFields != undefined) {
        const { otherFields } = element;
        otherFields.forEach((item) => {
          Object.keys(item).forEach((v) => {
            element[v] = item[v];
          });
        });
      }
      delete element.otherFields;
      return element;
    });
  } else {
    if (payload.otherFields != undefined) {
      const { otherFields } = payload;
      otherFields.forEach((item) => {
        Object.keys(item).forEach((v) => {
          payload[v] = item[v];
        });
      });
    }
  }

  delete payload.otherFields;
  return payload;
};
const value = formatProduct_Service([
  formatProductSchema(),
  formatProductSchema(),
  formatProductSchema(),
]);
console.log("final result", value);
