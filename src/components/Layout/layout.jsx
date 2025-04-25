import React from "react"
import Header from "../Header/Header";
import Foooter from "../Footer/Footer";
import { Outlet } from "react-router-dom";





const Layout =()=>{
    return(
       <>
        <div style ={{background: "var(--black)", overflow:"hidden"}}>
             <Header/>
             <Outlet/> 
        </div>
        <Foooter/>
        </>
    );
}

export default Layout;