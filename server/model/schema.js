import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    name:String,    
    price:Number,
    image:String,
    description:String,
})

export const Product=mongoose.model("Product_table",ProductSchema);