
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../redux/reducer/ProductSlice'
import { addToCart, removeFromCart } from '../redux/reducer/CartSlice';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';

const ShopPageItem = ({ data }: { data: Product }) => {

//    console.log(data)
    const dispatch = useDispatch<AppDispatch>();
    
    const cartItems = useSelector((state:RootState) => state.cart.cartItems );

     console.log("Cart:", cartItems);
    
  const addTOCART = () => {      
      console.log(addToCart(data));
       dispatch(addToCart(data))
       
  }


    return (
        <div className="rounded flex flex-col bg-gray-800 p-3 gap-3 justify-between relative">
            <div className="flex flex-col gap-3  cursor-pointer">
                <div className="__img_container bg-white rounded overflow-hidden flex justify-center items-center h-[250px]">
                    <img
                        className="max-h-[250px] aspect-square object-contain"
                        src={data.image}
                        alt=""
                    />
                </div>
                <div className="text-center text-green-700 font-bold absolute top-1 right-1 p-1 text-lg flex justify-center items-center bg-slate-300 rounded">
                    ${data.price}
                </div>
                <p className="font-semibold text-white">{data.title}</p>
                <small className="text-gray-500 text-xs">{data.description}</small>
            </div>

            { cartItems &&   <div className=' flex items-center gap-x-2'>
                        <Link to="/" className=' flex items-center justify-center  w-full bg-green-500 p-[10px] text-white'>
                            View
                        </Link>
                  {   cartItems.length > 0 ?  (<button
                    onClick={addTOCART}
                    className="w-full bg-green-500 p-[10px] text-white  flex items-center justify-center "
                >
                    Add to Cart +
                </button>) :(
                        <button
                        onClick={()=>dispatch(removeFromCart(data.id))}
                        className="w-full bg-green-500 p-[10px] text-white  flex items-center justify-center "
                    >
                        Remove form Cart -
                    </button>
                )}
                </div>
  
    }
   
        </div>
    )
}

export default ShopPageItem