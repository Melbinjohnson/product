import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
export const connectDb = async () => {
    try {
        mongoose.connect(process.env.connection_url);
        console.log("connected")
    } catch (error) {
        console.log("connection error")
    }
}