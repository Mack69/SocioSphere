require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");
const connectDb = require("./database/db");
const errorHandling = require("./middlewares/errorHandling");

// Middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
// app.use(errorHandling);

const PORT = 5000;

// Connect to DB and start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
