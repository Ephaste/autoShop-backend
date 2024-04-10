
import express  from "express";
const carRouter = express.Router();

//import { createHive, getAll, getbyId, updateHive,deleteHiveById} from "../hive/hiveCrud";
import { createCar, getAll, getbyId, updateCar, deleteCarById } from "../controllers/car/carCrud.js";


//usersRouter.use(verifyToken);
carRouter.get("/getAll", getAll);
carRouter.post("/create",createCar);
carRouter.delete("/:id",deleteCarById);
carRouter.get("/getById/:id", getbyId);
carRouter.put("/update/:id",updateCar);

export default carRouter;
            