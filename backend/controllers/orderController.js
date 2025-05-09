import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js"
import stripe from "stripe";

//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user order for frontend

const placeOrder = async(req,res) =>{

const frontend_url ="http://localhost:5173"

    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })

        const session = await stripe.Checkout.SessionsResource.create({
            line_items:line_items,
            made:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`
        })


    } catch (error) {
        
    }

}


//methana thw thiyenw verifyorder

//user order for frontend
const userOrders = async(req,res) =>{
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }

}
export {placeOrder,userOrders}
