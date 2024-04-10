



import { car } from "../../models/carModel.js";
  export const  createCar = async(req, res) =>{
    try{
      let CAR = req.body;
      let newCar = await car.create(CAR);
        console.log(newCar);
        res.status(201).json(newCar);
   }catch(error){
     res.status(500).json({ error: "Internal server error" });
    }
  };
  
  
//GET ALL HIVES
export const getAll = async (req, res) => {
  try {
    let allCars = await car.find({});
    res.status(200).json(allCars);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//GET BY ID
export const getbyId = async (req, res) => {
    const carId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const CAR = await car.findById(carId);
  
      if (!CAR) {
        return res.status(404).json({ error: "car is not found" });
      }
  
      res.status(200).json(CAR);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  //UPDATE A CAR


  export const updateCar = async (req, res) => {
    const carId = req.params.id; // Assuming the ID is passed as a URL parameter
    const updatedData = req.body;
  
    try {
      const foundCar= await car.findById(carId);
  
      if (!foundCar) {
        return res.status(404).json({ error: "hive not found" });
      }
  
      // Update the foundCase object with the provided data
      Object.assign(foundCar, updatedData);
  
      // Save the updated case
      const updatedCar = await foundCar.save();
  
      res.status(200).json(updatedCar);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  //DELETE A CASE
export const deleteCarById = async (req, res) => {
  const carId = req.params.id; // Assuming the ID is passed as a URL parameter

  try {
    const deletedCar = await car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({ error: "The mentioned car is not found" });
    }

    res.status(200).json({ message: "The car deleted successfully", deletedCar });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
