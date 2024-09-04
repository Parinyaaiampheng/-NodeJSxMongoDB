const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const booksRoute = require("./routes/books.js");

const app = express();
dotenv.config();
app.use(express.json());

// MongoDB Config
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MONGO DB connected'))
  .catch(err => console.log(err));

// Routing Config
app.use("/api/books", booksRoute);

// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
