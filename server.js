import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
///import "dotenv/config";
import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";
//import mainRouter from "./src/routes/index.js";
import morgan from "morgan";
//import swaggerJSDoc from "swagger-jsdoc";
//import swaggerUI from "swagger-ui-express";
//import hiveRouter from "./src/routes/hiveRoute.js";
import authRouter from "./src/routes/authenticationRoute.js";
import carRouter from "./src/routes/carRoute.js";


const app =express();
app.use(bodyParser.json());
app.use(cors())
app.use(morgan("dev"))

//mainRouter.use('api/v1', mainRouter);
//app.use('/api/v1/hive',hiveRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/car', carRouter);



//pp.db =db;
// const fileSync = require("lowdb/adapters/fileSync");
// const adapter = new fileSync("db.json");
//  const db = low(adapter)

let port = 150; 

 

console.log(process.env.DB_CONNECTION_DEV);
mongoose.connect(process.env.DB_CONNECTION_PROD).then((res) =>{
  console.log("Database connected");
});
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});