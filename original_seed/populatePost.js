const posts = require("../payloads/posts");
const axios = require("axios");
const { baseUrl, headers } = require("../payloads/constants");

const POST = (array) => {
  array.forEach((category) => {
    axios
      .post(`${baseUrl}/posts`, post, {
        ...headers,
      })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err.response.data));
  });
};
