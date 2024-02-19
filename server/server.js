const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/ConnectDb");

// config dotenv file
dotenv.config({ path: "./config/config.env" });

// Connect database
connectDb();

// rest object
const app = express();

// middelwares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/users", require("./routes/userRoute"));

// PORT
const PORT = process.env.PORT || 8080;

// listen server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
