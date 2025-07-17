import mongoose, { Schema } from "mongoose";

const medicalRecordSchema=new mongoose({},{timestamps: true});


export const Record = mongoose.model("Record",medicalRecordSchema);