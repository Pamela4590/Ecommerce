import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

function Layout() {
    return(
        <>
       <Navbar/>
       <Outlet/>
       <Footer/>
       
        
        
        </>
    )
}
export default Layout;
