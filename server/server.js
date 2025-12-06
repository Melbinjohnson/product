import express from "express"
import userRoutes from './routes/userRoutes.js'
import productRoutes from "./routes/productRoutes.js"
import dotenv, { config } from "dotenv"
import { connectDb } from "./model/config.js"
import cors from "cors"


const app= express()

dotenv.config()
connectDb();
app.use(express.json());
app.use(cors());


app.use("/api",productRoutes)
app.use("/auth",userRoutes)

app.listen(process.env.PORT)
