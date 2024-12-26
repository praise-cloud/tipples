
import { Link, NavLink } from 'react-router-dom';
import {assets} from '../assets/frontend_assets/assets'; // Adjust the path to where your assets file is located


const Navbar = () => {
  return (
    <div className="flex item-center justify-between py-5 font-medium">
      <Link to="/">
        <img 
          src={assets.logo} 
          alt="" 
          className="w-36"
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Wine</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Spirits</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
        <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>More</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img 
          src={assets.search_icon} 
          alt=""
          className="w-5 cursor-pointer"
          />

          <Link to="/cart">
            <img 
              src={assets.cart_icon} 
              alt=""
              className="w-5 cursor-pointer"
              />

              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
          </Link>
          <div className="group relative">
            <img 
              src={assets.profile_icon} 
              alt=""
              className="w-5 cursor-pointer"
              />

              <div className="group-hover:block absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p className="cursor-pointer hover:text-black">Whislist</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Navbar