
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
   
  return (
    <div className=" w-full flex z-50 shadow-lg items-center justify-between px-[80px]  bg-white fixed top-0 right-0 py-5 ">
                <Link to="/"><h1 className=" text-2xl text-green-500 font-medium italic">My-E-Cart</h1></Link>
                <div className=" relative  cursor-pointer">
                  <FaOpencart size={26}/>
                    <p className=" absolute -top-2 -right-1 flex items-center justify-center bg-green-500
                     text-white rounded-full w-5 h-5 font-semibold  text-[12px]">2</p>
                </div>
                
    </div>
  )
}

export default Navbar