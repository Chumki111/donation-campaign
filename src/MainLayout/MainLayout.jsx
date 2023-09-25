import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";




const MainLayout = () => {
    return (
        <div>
        <div>
       <Navbar></Navbar>
        </div>
           <div className="py-10 px-10">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;