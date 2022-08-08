import { useEffect, useState } from "react"
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import mockdata from "./mockdata"
import OrderPlaced from "./pages/ShoppingCart/OrderPlaced";

const App = () => {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // mocking API call
    setData(mockdata)
  }, [])
  console.log(cart)
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage navigate={navigate} data={data} />} />
        <Route path="/cart" element={<ShoppingCart navigate={navigate} data={data} cart={cart} setCart={setCart}/>} />
        <Route path="/product" element={<SingleProductPage data={data} navigate={navigate} cart={cart} setCart={setCart} searchParams={searchParams} />} />
        <Route path="/order-placed" element={<OrderPlaced />}/>
      </Routes>
    </div>
  );
}

export default App;
