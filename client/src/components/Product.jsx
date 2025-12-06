import React from 'react'

const Product = ({product}) => {
  const {name,price,image,description}=product

  return (
  
<div className="group relative border p-5 rounded-md">
<img
  src={image}
  alt="Product image"
  className="h-52 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:w-full lg:h-80"
/>
<div className="mt-4 flex justify-between">
  <div>
    <h3 className="text-sm text-gray-800 font-bold">
      <a href="#">
        <span aria-hidden="true" className="absolute inset-0"></span>
       {name}
      </a>
    </h3>
    <p className="mt-1 text-sm text-gray-500">{description}</p>
  </div>
  <p className="text-sm font-medium text-gray-900">${price}</p>
</div>
</div>

  )
}

export default Product
