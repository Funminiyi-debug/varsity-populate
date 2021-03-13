// const { baseUrl, headers } = require("../payloads/constants");

const { sample, baseUrl, headers } = constants;
function getProducts() {
  $.ajax({
    url: `${baseUrl}/products`,
    method: "get",
    headers: { ...headers.headers },
  })
    .done((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}

jQuery(function () {
  $("#myForm").on("submit", (e) => {
    e.preventDefault();
    // get the image
    const formValues = new FormData(this[0]);
    const files = $("#image")[0].files;

    // Object.entries(files).forEach((file) => {
    //   formValues.append("images", file[1]);
    // });

    // for many values
    products.forEach((data) => {
      POST(files, data);
    });
    // PUT(formValues);
  });
});

const POST = async (files, sample) => {
  const categoryId = await GET_IDS(sample.categoryName);
  sample.categoryId = categoryId;

  const formValues = new FormData();

  Object.entries(files).forEach((file) => {
    formValues.append("images", file[1]);
  });
  Object.keys(sample).map((key) => {
    formValues.append(key, sample[key]);
  });

  $.ajax({
    url: `${baseUrl}/products`,
    data: formValues,
    cache: false,

    headers: {
      ...headers.headers,
    },

    processData: false,
    contentType: false,
    type: "post",
    success: function (data) {
      console.log(data);
    },
    error: function (err) {
      console.log("error", err.responseJSON);
    },
  });
};
const PUT = (formValues) => {
  $.ajax({
    url: `${baseUrl}/products/${formValues.get("id")}`,
    data: formValues,
    cache: false,

    headers: {
      ...headers.headers,
    },

    processData: false,
    contentType: false,
    type: "put",
    success: function (data) {
      console.log(data);
    },
    error: function (err) {
      console.log("error", err.responseJSON);
    },
  });
};

const GET_IDS = async (categoryName) => {
  let response = "";

  await $.ajax({
    url: `${baseUrl}/categories/?name=${btoa(categoryName)}`,
    method: "get",
    headers: {
      ...headers.headers,
    },
    success: function (data) {
      response = data.payload;
    },
    error: function (err) {
      console.log("error", err.responseJSON);
    },
  });
  return response._id;
};
