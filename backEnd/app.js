import express from "express";

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add a category filter (business, tech, sports)
//  and a date range filter, language, sources, statusAl
//   filtration needs to be from backend. All fetched news should be stored in database

// https://newsapi.org/
// Your API key is: 4b366af9f68843949e0df5b77f9f6fdf
