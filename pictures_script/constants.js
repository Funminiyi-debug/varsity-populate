const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MDQxMzJlMTI2YTI1NjMxNDhmZmRkZmQiLCJlbWFpbCI6InRoZS5yZWFsLmVsLmhvbnJhZG9AZ21haWwuY29tIiwiaWF0IjoxNjE1NjUwMzYxLCJleHAiOjE2MTc0NTAzNjF9.2ij-mBN9cua6Frwx7tg3dnYgKkr-hDRrHff8pmnIowk`;

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
    id: `6049f362482a102a54829ecf`,
    title: "Sample 12",
    categoryId: "603e71c546cd7d39fccd81ec",
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
