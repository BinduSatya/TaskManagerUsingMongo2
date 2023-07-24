const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect("mongodb://127.0.0.1:27017/Todo-Express", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
