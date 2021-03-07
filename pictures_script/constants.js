const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MDM3OTZjNGVmOGI4MjE2MTBmNGJhMGYiLCJlbWFpbCI6InRoZS5yZWFsLmVsLmhvbnJhZG9AZ21haWwuY29tIiwiaWF0IjoxNjE0MjU1ODEyLCJleHAiOjE2MTYwNTU4MTJ9.fRZ64SEBtFL84l0kxFloK32loe_84o-Lme5ZAIo9ZKU`;

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };

// const baseUrl = `http://localhost:3001/api`;
const constants = {
  headers: {
    headers: {
      // "Content-Type": "multipart/form-data",
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  },
  baseUrl: `http://localhost:3001/api`,
  sample: {
    id: `60451fb840fc6921c42cf9ea`,
    title: "Food",
    subcategoryId: "603e71c546cd7d39fccd81ec",
    adStatus: "Draft",
    school: "OAU",
    price: "20000",
    delivery: true,
    gender: "female",
    type: "Versace",
    condition: "good",
  },
};
// export default { headers, baseUrl };
