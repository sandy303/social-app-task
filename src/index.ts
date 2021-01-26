import express from "express";
require("dotenv").config();
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import uRouter from "../Routers/userRouters"
import pRouter from "../Routers/PostRouters"

//const joi = require('joi');

const app: express.Application = express();
const port = process.env.PORT || 3000;

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/users",uRouter);
app.use("/posts",pRouter);

// test endpoints
app.get("/test", (req: express.Request, res: express.Response) => {
  res.json("test api endpoint");
});
app.post("/test/", (req: express.Request, res: express.Response) => {
  const { name, age } = req.body;
  res.json({
    name,
    age,
  });
});

// to connect to mongodb url
mongoose.connect(
  process.env.MONGOURI ||
    "your local database url like {'mongodb://localhost:27017/your database name'}",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to database");
  }

);

// to listen on specific port
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});




