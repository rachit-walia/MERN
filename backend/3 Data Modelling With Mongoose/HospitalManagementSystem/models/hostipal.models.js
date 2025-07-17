import mongoose, { Schema } from "mongoose";

const hospitalSchema=new mongoose({
    name:{
        type:String,
        required:true
    },
    address:{
        type: String,
        requireed: true
    },
    specializedIn:{
        type:String,
        required: true
    }
    
},{timestamps: true});


export const Hospital = mongoose.model("Hospital",hospitalSchema);