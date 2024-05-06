
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import {  Product, fetchStoreAsyncThunk } from "../redux/reducer/ProductSlice"
import { useEffect } from "react"
import ShopPageItem from "./ShopPageItem"



const ProductsListing = () => {
     
    const storeItems = useSelector((state: RootState) => state.products.Products);

    //  console.log(storeItems);
     
      const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
         dispatch(fetchStoreAsyncThunk())
    },[dispatch])


  return (
    <div className=" grid grid-cols-3  w-full gap-5 shadow-lg ">
        {storeItems?.map((item:Product)=>(
             <ShopPageItem  key={item.id} data={item} />
        ))}
    </div>
  )
}

export default ProductsListing