
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import {assets} from '../assets/frontend_assets/assets'; // Adjust the path to where your assets file is located


const Navbar = () => {

  const [visible, setVisible] = useState(false);

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


    {/* icons */}

      <div className="flex items-center gap-6">
        <img 
          src={assets.search_icon} 
          alt=""
          className="w-5 cursor-pointer"
          />

{/* cart */}
        <Link to="/cart" className="relative">
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
              onClick={() => setVisible(true)}
              />

              <div className="group-hover:block absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p className="cursor-pointer hover:text-black">Wiselist</p>
                  <p className="cursor-pointer hover:text-black">Logout</p>

                  <NavLink to={"/profile"} className="cursor-pointer hover:text-black">My Profile</NavLink>
                  <NavLink to={"/orders"} className="cursor-pointer hover:text-black">My Profile</NavLink>
                  <NavLink to={"/whislist"} className="cursor-pointer hover:text-black">Whislist</NavLink>
                  <NavLink to={"/"} className="cursor-pointer hover:text-black">Logout</NavLink>
                </div>
              </div>
          </div>

          <img 
            src={assets.menu_icon} 
            alt="" 
            className="w-5 cursor-pointer sm:hidden"
            />
      </div>

      {/* sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className="flex item-center gap-4 p-3 cursor-pointer">
              <img 
                src={assets.dropdown_icon} 
                alt=""
                className="h-4 rotate-180"
                />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-5 pl-6 border" to={"/"}>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-5 pl-6 border" to={"/wine"}>Wine</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-5 pl-6 border" to={"/spirit"}>Spirit</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-5 pl-6 border" to={"/more"}>More</NavLink>
          </div>
        </div>

    </div>
  )
}

export default Navbar