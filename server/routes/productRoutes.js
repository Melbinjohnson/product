import express from "express"
const productRoutes=express.Router()

import { GetAllProducts,AddnewProduct,GetProductByID,EditProduct,DeleteProduct } from "../controller/ProductController.js"


productRoutes.get("/",GetAllProducts)
productRoutes.post("/add",AddnewProduct)
productRoutes.get("/:id",GetProductByID)
productRoutes.patch("/:id",EditProduct)
productRoutes.delete("/:id",DeleteProduct)



export default productRoutes