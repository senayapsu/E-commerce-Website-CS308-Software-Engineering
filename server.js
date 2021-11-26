const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

mongoose.connect(
    `mongodb+srv://doruksoypacaci:Doruk1.doga@cluster0.7secc.mongodb.net/LAPSS?retryWrites=true&w=majority`, 
    {
    }
  );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

//latest changes made
