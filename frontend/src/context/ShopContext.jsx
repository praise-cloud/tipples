import { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets'; // Ensure this path is correct and products is an array

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₦';
  const delieveryFee = 1500;

  const value = {
    products,
    currency,
    delieveryFee,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;