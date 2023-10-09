const app = require("./app.js");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database.js");

//handling unacught exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("shutting down the server due to unacught exception");
  process.exit(1);
});
//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server started at http://localhost:${process.env.PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
