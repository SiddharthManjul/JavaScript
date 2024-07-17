import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Digital Book Store");
});



mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to DB');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
      });
  })
  .catch((error) => {
    console.log(error);
  });
