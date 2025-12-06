import Product from "./components/Product"
import Products from "./components/Products"
import Home from "./components/Home"
import AddProduct from "./components/AddProduct"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <Router>
      <nav className="bg-white shadow-md p-2 w-full min-h-10 flex justify-between items-center">
        <Link to="/">
          <div className="font-extrabold text-red-500 lg:text-5xl ml-4 md:text-3xl sm:text-2xl">boAt</div>
        </Link>

        <div>
          <ul className="flex mr-4 w-sm justify-evenly items-center font-bold text-xl">
            <li className="hover:text-red-600">
              <Link to="/products">
                Products
              </Link>
            </li>
            <li className="hover:text-red-600">
              <Link to="/addproducts">
                Add Product
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* route path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproducts" element={<AddProduct />} />
      </Routes>
      {/* route path */}
      {/* name,img,price,descr, */}
    </Router>


  )
}

export default App
