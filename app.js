const connectDB = require("./db/server");
const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks.js");

//Middle Ware
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>TASK MANAGER APP</h1>");
});

app.use("/tasks", tasks);
console.log("Hello");
const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log("Server Started"));
  } catch (err) {
    console.log(err);
  }
};

start();
