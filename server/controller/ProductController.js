import { Product } from "../model/schema.js"

export const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ "response": "server error" })

    }

}

export const GetProductByID = async (req, res) => {
    try {
        const id = req.params.id;   
        console.log("ID:", id);

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ response: "Product not found" });
        }

        res.status(200).json({ data: product });

    } catch (error) {
        console.error(error);
        res.status(500).json({ response: "server error" });
    }
};

export const EditProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("ID:", id);

        const { name, price, image, description } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, image, description },
            { new: true } 
        );

        if (!updatedProduct) {
            return res.status(404).json({ response: "Product not found" });
        }

        res.status(200).json({
            response: "Product updated successfully",
            data: updatedProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ response: "server error" });
    }
};


export const AddnewProduct = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ "response": "reqest body is empty" })
        }
        console.log("4hello")
        const { name, price, image, description } = req.body

        if (!name || !price || !image) {
            return res.status(400).json({ response: "Name, price, and image are required" });
        }


        const prod = new Product({
            name, price, image, description
        });
        await prod.save();

        res.status(201).json({
            response: "Product added successfully",
            data: prod
        });

    } catch (error) {
        res.status(500).json({ "response": "server error" })
    }
}

export const DeleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ response: "Product not found" });
        }

        res.status(200).json({
            response: "Product deleted successfully",
            data: deletedProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ response: "server error" });
    }
};
