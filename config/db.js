const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  mongoose
    .connect(db)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((e) => {
      console.log("Error occurred while connecting to DB", e);
    });
};

module.exports = connectDB;
