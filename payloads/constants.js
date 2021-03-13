const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MDQxMzJlMTI2YTI1NjMxNDhmZmRkZmQiLCJlbWFpbCI6InRoZS5yZWFsLmVsLmhvbnJhZG9AZ21haWwuY29tIiwiaWF0IjoxNjE1NjUwMzYxLCJleHAiOjE2MTc0NTAzNjF9.2ij-mBN9cua6Frwx7tg3dnYgKkr-hDRrHff8pmnIowk`;

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
