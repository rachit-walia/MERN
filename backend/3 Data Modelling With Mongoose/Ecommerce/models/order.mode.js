import mongoose from "mongoose";

const orderItemSchema=new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity :{
        type: Number,
        required: true
    }
}) // in this there is no need to add timestamp bcz we are not exporting this schema t


const orderSchema = new mongoose.Schema({
    order:{
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems:{
        type: [orderItemSchema]
    },

    address :{
        type: String,
        required: true,
    },

    status :{
        type: String,
        enum: ["PENDING","CANCELLED", "DELIEVERED"],
        default: "PENDING"
    }

},{timestamps: true});

export const Order= mongoose.model("Order",orderSchema)