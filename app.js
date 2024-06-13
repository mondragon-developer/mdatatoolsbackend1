const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const userRoutes = require("./routes/api");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://mondragon-developer.github.io/mdatatools/",
    ],
  })
);
app.use(express.json());

app.use(bodyParser.json());
app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
