// import React from 'react'

import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext); // Remove this line if 'currency' is not needed

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden">
            <img 
                src={image[0]}
                alt=""
                className="hover:scale-110 transition ease-in-out"
                />
        </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem

// to={id.startsWith('wine') ? `/wine/${id}` : `/spirit/${id}`}