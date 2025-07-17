import mongoose, { Schema } from "mongoose";
import { Hospital } from "./hostipal.models";

const doctorSchema=new mongoose({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears:{
        type:Number,
        default: 0
    },
    worksInHospitals:{
       hospitalName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
    }


},{timestamps: true});


export const Doctor = mongoose.model("Doctor",doctorSchema);