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

    Object.entries(files).forEach((file) => {
      formValues.append("images", file[1]);
    });

    Object.keys(sample).map((key) => {
      formValues.append(key, sample[key]);
    });

    $.ajax({
      url: `${baseUrl}/products/60451fb840fc6921c42cf9ea`,
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
  });
});
