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
