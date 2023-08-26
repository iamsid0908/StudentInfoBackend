import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import globalRoutes from "./routes";
require('dotenv').config()

const app=express();

const connectMongo = async () => {
    return new Promise((resolve, reject) => {
      mongoose
        .connect("mongodb+srv://siddharthchandrakar007:sid@cluster0.uvqbe62.mongodb.net/", {
          autoIndex: true,
        })
        .then(() => {
          console.log('Mongo connected');
          resolve('Mongo connected');
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  };

app.use(cors());
app.use(express.json());

app.use("/v1",globalRoutes);

const port=8000;
app.listen(port,()=>{
    console.log("server is running at port "+port);
   
    connectMongo()
})

