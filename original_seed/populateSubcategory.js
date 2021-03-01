// const categories = [{ name: "sample name", subcategoryType: "sks" }];
const axios = require("axios");
const subcategories = require("../payloads/subcategories");

const { baseUrl, headers } = require("../payloads/constants");

const POST = (array) => {
  array.forEach(async (subcategory) => {
    try {
      const categoryid = (
        await axios.get(
          `${baseUrl}/categories/?name=${subcategory.categoryName}`,
          { ...headers }
        )
      ).data.payload._id;

      console.log("category id obtained", categoryid);

      subcategory.payload.category = categoryid;
      const subcategoryFromDb = await axios.post(
        `${baseUrl}/subcategories`,
        subcategory.payload,
        { ...headers }
      );
      console.log(subcategoryFromDb.data);
    } catch (error) {
      console.log(error.response.data.error);
      console.log("error message", error.message);
    }
  });
};

const PUT = (array) => {
  array.forEach((subcategory) => {
    axios
      .put(`${baseUrl}/subcategories/jd`, subcategory, {
        ...headers,
      })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err.message));
  });
};

const GET = () => {
  axios
    .get(`${baseUrl}/subcategories`, {
      ...headers,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
};

const DELETE = () => {
  axios
    .delete(`${baseUrl}/subcategories`, {
      ...headers,
    })
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
};
// POST(subcategories);
// PUT(subcategories);
// GET();
// DELETE();
// process.exit(0);
