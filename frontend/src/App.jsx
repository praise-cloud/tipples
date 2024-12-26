import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Wine from './pages/Wine'
import Spirit from './pages/Spirit'
import More from './pages/More'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Orders from './pages/Orders'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'

function App() {

  return (
   <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/wine/:productId" element={<Wine/>}/>
      <Route path="/spirit/:productId" element={<Spirit/>}/>
      <Route path="/more/:productId" element={<More/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
   </div>
  )
}

export default App