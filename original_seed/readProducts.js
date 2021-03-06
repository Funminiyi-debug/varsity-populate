const axios = require("axios");
const { baseUrl, headers } = require("../payloads/constants");

const GET = async () => {
  try {
    const res = await axios.get(`${baseUrl}/products`, headers);
    console.log("data", res.data);
  } catch (error) {
    console.log("error", error.response.data);
  }
};

GET();
