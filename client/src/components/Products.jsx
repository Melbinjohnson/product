import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3000/api/');
        setProduct(response.data.products);   // your API returns array → use directly
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>

        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          
          {product.map((item) => (
            <Product key={item._id} product={item} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Products;
