import mongoose from "mongoose";

export const connectDB = async()=>{
    (await mongoose.connect("mongodb+srv://prabashi:HeLLOwORLD@cluster0.3plkh4g.mongodb.net/food_delivery").then(()=>console.log("Database connected")));
}
