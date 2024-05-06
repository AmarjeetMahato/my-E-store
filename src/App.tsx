import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

const Layout = () => {
     return(
        <>
             <Navbar/>
             <Outlet/>
             <Footer/>
        </>
     )
}

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
           path:"/",
           element:<Home/>,
        },
        {
           path:"/product/:id",
           element:<ProductDetails/>
        }
      ]
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App