import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import path from 'path'
import globalRoutes from "./routes";
require('dotenv').config()

const app=express();

const connectMongo = async () => {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(`${process.env.MONGO_DB}` , {
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
app.listen(process.env.PORT,()=>{
    console.log("server is running at port "+process.env.PORT);
   
    connectMongo()
})

