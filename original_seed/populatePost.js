const posts = require("../payloads/posts");
const axios = require("axios");
const { baseUrl, headers } = require("../payloads/constants");

const POST = (array) => {
  array.forEach((post) => {
    axios
      .post(`${baseUrl}/posts`, post, {
        ...headers,
      })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err.response.data));
  });
};

const GET = async () => {
  try {
    const res = await axios.get(`${baseUrl}/posts`, {
      ...headers,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

// POST(posts);
// GET();
