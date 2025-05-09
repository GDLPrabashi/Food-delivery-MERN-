import express from "express"
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRouter.js";

//app config
const app = express();
const port =4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoint
app.use('/api/food',foodRouter);
app.use("/images",express.static("upload"));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.send("API is working");
})

app.listen(port,()=>{
    console.log(`Server started: http://localhost:${port}`);
})

{/*
    
    mongodb+srv://prabashi:HeLLOwORLD@cluster0.3plkh4g.mongodb.net/?
    */}