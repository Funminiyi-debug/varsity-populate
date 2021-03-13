const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MDQxMzJlMTI2YTI1NjMxNDhmZmRkZmQiLCJlbWFpbCI6InRoZS5yZWFsLmVsLmhvbnJhZG9AZ21haWwuY29tIiwiaWF0IjoxNjE1NDU4Njg3LCJleHAiOjE2MTcyNTg2ODd9.6F4qNnh7XFpgXlz9I9UypKKRHfiuCScZlXZ5MxcrCuc`;

// const headers = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };

// const baseUrl = `http://localhost:3001/api`;

module.exports = {
  headers: {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  },
  baseUrl: `http://localhost:3001/api`,
};
// export default { headers, baseUrl };
