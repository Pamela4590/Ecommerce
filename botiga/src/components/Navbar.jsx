import React from "react";
import '../style/Navbar.css'
import search from "../App"
import { RiAccountBoxLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { RiHeart3Line } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="Botiga-header">
        <div className="Botiga-logo">
       <h1>Botiga</h1> 
       </div>
       <div className="button-container" >
        <button>all categories</button>
        </div>
        <div className="search-products">
       
        
       
        <input type="text" placeholder="search"></input>
        </div>
        <div className="account-logo">
        <RiAccountBoxLine />
        
        <LuShoppingBag />
      
        <RiHeart3Line />
        
        </div>
        
       </div>


<div className="services-lists">
    <button className="Trending-Categories">Trending categories</button>
<ul className="Navlinks">
<li > <Link to="/">Home</Link></li>
<li >Shop</li>
<li >Vendors</li>
<li >Blog</li>
<li >Contact</li>

</ul>
<div>
    <div className="call-logo">
<IoMdCall />
<label>0788907196</label>
</div>
</div>
</div>


        
        </>
    
    )
    
}
export default Navbar