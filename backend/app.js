const express = require("express");
const errorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());

//routes import
const products = require("./routes/productRoutes");

app.use("/api/v1", products);

//middleware for error
app.use(errorMiddleware);

module.exports = app;
