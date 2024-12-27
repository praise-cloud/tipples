import { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestDrinks = () => {

    const { products } = useContext(ShopContext)
    const [LatestDrinks, setLatestDrinks] = useState([]);

    useEffect(()=>{
        setLatestDrinks(products.slice(0,10));
    },[])

  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={"LATEST"} text2={"DRINKS"}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea neque alias perspiciatis error accusamus, commodi, atque sint sunt natus vitae eaque. Porro modi, vero quo deleniti quos excepturi aliquam.
            </p>
        </div>

        {/* rendering the Drinks */}
            <div className="grid grid-col sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    LatestDrinks.map((item, index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>


    </div>
  )
}

export default LatestDrinks