import express from "express";
import authMiddle from "../middleware/auth.js";
import { placeOrder ,userOrders} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddle,placeOrder);
//orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddle,userOrders)

export default orderRouter;