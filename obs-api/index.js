// Import the necessary modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of express
const app = express();

// Use body-parser middleware to handle POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define the GET endpoint
app.get("/api", (req, res) => {
  res.json({ message: "GET request received at /api" });
});

// Define the POST endpoint
app.post("/api", (req, res) => {
  console.log(req.body);
  res.json({ message: "POST request received at /api", data: req.body });
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
