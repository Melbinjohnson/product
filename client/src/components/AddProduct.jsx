

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const navigate=useNavigate();

  const [formdata, setFormdata] = useState({
    name: "", price: "", image: "", description: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prevData) => ({
      ...prevData,
      [name]: value

    }));
  }

  const handleSubmit = async (e) => {
   try {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/add", {
      method: "post",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(formdata)
    })

    alert("Prouct submitted!");
    let data = JSON.stringify(formdata, null, 2)
    setFormdata({
      name: "", price: "", image: "", description: ""
    })

    navigate("/products")

   } catch (error) {
    alert("Error submitting form");
    
   }

  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Product</h2>

      {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">New Product</h2> */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Product Name"
            value={formdata.name}
            name='name'
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">price</label>
          <input
            type="Product Price"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Product price"
            value={formdata.price}
            name='price'
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">image</label>
          <input
            type="text"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Image Url"
            value={formdata.image}
            name='image'
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700">description</label>
          <input
            type="text"
            className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Product description"
            value={formdata.description}
            name='description'
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded-lg mt-2 hover:bg-red-700 transition-all"
        >
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;
