require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const incomeRoutes = require("./router/transactions");

//express app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

// log of all the actions
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/income", incomeRoutes);

// connection to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.log(`error: ${error.message}`);
  });

// listening on the port
app.listen(process.env.PORT, () => {
  console.log("server is listening on port", process.env.PORT);
});
