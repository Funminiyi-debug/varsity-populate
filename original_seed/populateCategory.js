// const categories = [{ name: "sample name", categoryType: "sks" }];
const categories = require("../payloads/categories");
const axios = require("axios");
const { baseUrl, headers } = require("../payloads/constants");

const POST = (array) => {
  array.forEach((category) => {
    axios
      .post(`${baseUrl}/categories`, category, {
        ...headers,
      })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err.response.data));
  });
};
const PUT = (array) => {
  array.forEach((category) => {
    axios
      .put(`${baseUrl}/categories/jd`, category, {
        ...headers,
      })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err.message));
  });
};

const GET = () => {
  axios
    .get(`${baseUrl}/categories`, {
      ...headers,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
};

const DELETE = () => {
  axios
    .delete(`${baseUrl}/categories`, {
      ...headers,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
};

const POST_PRODUCT = () => {
  const sample = {
    title: "Food",
    subcategoryId: "603cca148f88f60017327f5f",
    adStatus: "Draft",
    school: "FUTA",
    price: "20000",
    delivery: true,
    gender: "male",
    type: "Versace",
    condition: "good",
  };
  axios

    .post(`${baseUrl}/products`, sample, {
      ...headers,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err.response.data.error));
};

POST(categories);
// DELETE();
// GET();
// PUT(categories);
// process.exit(0);

// POST_PRODUCT();
// POST_SERVICE();
// GET_PRODUCTS();
