import React from "react";
import '../style/Home.css';
function Home (){
    return(
        <>
      
        <div>
        <div className="updates-inbotiga">
                   <div>
                <li>Electronics</li>
                <li>Computer Gadget</li>
                <li>Fashion</li>
                <li>Body Lotion</li>
                <li>Sports</li>
                <li>Woman Clothes</li>
                <li>Shoes</li>
                <li>Watches</li>
                </div>
                </div>
                
    
            <div>
                <div className="project-class">
                <h1>Explore our latest and greatest electronics</h1>
                <button>SHOP NOW</button></div>
            </div>
            </div>
            <div className="popular-goods">
                <h1>Popular Categories</h1>
                <li></li>
            </div>
        </>
    )
}
export default Home;