const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000;

const todoRoutes= require('./routes/todoRoutes')
app.use("/api/todos",todoRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb연결 성공"))
  .catch((err) => console.log("연결 실패", err));


