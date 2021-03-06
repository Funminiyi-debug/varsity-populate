const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MDM3OTZjNGVmOGI4MjE2MTBmNGJhMGYiLCJlbWFpbCI6InRoZS5yZWFsLmVsLmhvbnJhZG9AZ21haWwuY29tIiwiaWF0IjoxNjE0MjU1ODEyLCJleHAiOjE2MTYwNTU4MTJ9.fRZ64SEBtFL84l0kxFloK32loe_84o-Lme5ZAIo9ZKU`;

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };

// const baseUrl = `http://localhost:3001/api`;
const constants = {
  headers: {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  },
  baseUrl: `http://localhost:3001/api`,
};
// export default { headers, baseUrl };
