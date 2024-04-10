import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    carImage: String,
    city_mpg: Number,
    class: String,
    combination_mpg: String,
    cylinders: Number,
    displacement: Number,
    drive: String,
    fuel_type: String,
    highway_mpg: Number,
    make: String,
    model: String,
    transmission: String,
    year: Number,
    price: Number,
    reasingPrice: Number
});

export const car = mongoose.model("car", carSchema);
