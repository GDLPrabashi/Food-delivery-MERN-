import mongoose from "mongoose";

const orderSechema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        Default:"Food Processing"
    },
    date:{
        type:Date,
        Default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    }
})

const orderModel = mongoose.models.order ||mongoose.model("order",orderSechema)
export default orderModel;