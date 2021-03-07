const axios = require("axios");
const { baseUrl, headers } = require("../payloads/constants");

const GET = async () => {
  const id = `6043c74b4e1b46191068493f`;
  try {
    const res = await axios.get(`${baseUrl}/products/${id}`, headers);
    console.log("data", res.data);
  } catch (error) {
    console.log("error", error.response.data);
  }
};
const DELETE = async () => {
  const id = `6043c9b7ec164128480689be`;
  try {
    const res = await axios.delete(`${baseUrl}/products/${id}`, headers);
    console.log("data", res.data);
  } catch (error) {
    console.log("error", error.response.data);
  }
};

const GET_PRODUCTS = () => {
  axios

    .get(`${baseUrl}/products`, {
      ...headers,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err.response.data.error));
};

const POST_SERVICE = () => {
  const sample = {
    title: "Food",
    categoryId: "603cca148f88f60017GDSAnf",
    adStatus: "Draft",
    school: "FUTA",
    price: "20000",
    delivery: true,
    address: "14, adebo street",
    generator: true,
  };
  axios
    .post(`${baseUrl}/services`, sample, {
      ...headers,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err.response.data.error));
};
// GET();
// GET_PRODUCTS();
DELETE();
