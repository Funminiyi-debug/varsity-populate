// const { baseUrl, headers } = require("../payloads/constants");

const { baseUrl, headers } = constants;

jQuery(function () {
  $("#myForm").on("submit", (e) => {
    e.preventDefault();
    const formValues = new FormData(this[0]);
    console.log(formValues.entries());
    // $.post()
    $.ajax({
      url: baseUrl,
      data: formValues,
      headers: {
        "Access-Control-Allow-Origin": "*",
        ...headers.headers,
      },

      processData: false,
      contentType: false,
      type: "POST",
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log("error", err.responseJSON);
      },
    });
  });
});
