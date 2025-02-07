import React from "react";
import '../style/Footer.css';
import { IoLogoFacebook } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import footerimage from '../assets/image/footer.webp'
function Footer(){
    return(
       <>
       <div className="footer-container">
        <div className="Updates-goods">
         <h1>Stay up to date</h1>
         <p>Subscribe to our newsletter and get 20% discountoffer
          in your first order</p>
          
       <div className="Email-accounts">
          <input type="text" placeholder="Enter your email"></input>
        <button>Submit</button>
        </div>
        <div>
          <div className="Services-links">
          <p>SHOP
            <ul>
            <li>Bodylotion</li>
            <li>Compute Gadget</li>
            <li>Bodylotion</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>General</li>
            <li>Shoes</li>
            <li>SPorts</li>
            <li>Watch</li>
            <li>Woman Clothes</li>
            </ul>
          </p>
          <p>COMPANY
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
          </p>
          <p>ABOUT
            <ul>
              <li>Who We Are</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
          </p>
          <p>ACCEPT FOR
            <div className="images-icons"> 
          <img src={footerimage} /></div>
          </p>
          </div></div></div>
          
            <div className="Welcome-customers">
          <h2>Happy to help</h2>
            <li>Kigali,Kacyiru,Kanombe</li>
            <li>Phone:0788907196</li>
            <li>Mail:demo@gmail.com</li>
            <div className="website-icons">
            <IoLogoFacebook />
                <RiTwitterXFill />
                <FaLinkedin />
                <FaInstagramSquare /></div>

                

            </div>
            
              
                
               
               
              
              
            
            
          

        

       </div>
       </> 
    )
}
export default Footer;