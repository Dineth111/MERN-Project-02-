import e from "express";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Age:Number
})

const userModel=mongoose.model("users",userSchema)
module.exports=userModel