import express from "express";
import {login} from "../controllers/authentication/login.js";
import { signup } from "../controllers/authentication/signup.js";
import { logger } from "../middleware/logger.js";
const authRouter = express.Router();


authRouter.post("/login", login);
authRouter.post("/signup",logger,signup);
//authRouter.post("/changePassword", changePassword);


export default authRouter;
