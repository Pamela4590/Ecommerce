import React from "react";
import '../style/Home.css';
import bodylotion from '../assets/image/bodylotion.webp'
import sports from '../assets/image/sports.webp'
import computergudget from '../assets/image/computergudget.webp'
import earphones from '../assets/image/earphones.webp'
import watch from '../assets/image/watch.webp'
import clothes from '../assets/image/clothes.webp'
import bottle from '../assets/image/bottle.webp'
import amazon from '../assets/image/amazon.webp'
import headsets from '../assets/image/headsets.webp'
import santashop from '../assets/image/santashop.webp'
import babydollar from '../assets/image/babydollar.webp'
import digitalhouse from '../assets/image/digitalhouse.webp'
import jessica from '../assets/image/jessica.webp'
import glassmodern from '../assets/image/glassmodern.webp'
import kigalimodel from '../assets/image/kigalimodel.webp'
import { FaChevronCircleRight } from "react-icons/fa";
import easy from '../assets/icons/easy.svg'
import customerservice from '../assets/icons/customerservice.svg'
import highquality from '../assets/icons/highquality.svg'
import microphone from '../assets/pictures/microphone.webp'
import clock from '../assets/pictures/clock.webp'
import camera from '../assets/pictures/camera.webp'
import chicago from '../assets/instagram/chicago.webp'
import italian from '../assets/instagram/italian.webp'
import chinese from '../assets/instagram/chinese.webp'
import asian from '../assets/instagram/asian.webp'
import russian from '../assets/instagram/russian.webp'
import ethiopian from '../assets/instagram/ethiopian.webp'

function Home (){
    return(
        <>
      <div className="home-programms">
        
        <div className="updates-inbotiga">
                   <div><ul>
                <li>Electronics</li>
                <li>Computer Gadget</li>
                <li>Fashion</li>
                <li>Body Lotion</li>
                <li>Sports</li>
                <li>Woman Clothes</li>
                <li>Shoes</li>
                <li>Watches</li></ul>
                </div>
                </div>
                
    <div className="electonics-details">
            <div className="latest-goods">
                <div className="project-class">
                <h1>Explore our latest and greatest electronics</h1>
                <div className="shop-container">
                <button>SHOP NOW</button></div>
                </div>
            </div>
            </div>
            </div>
            <div className="focused-piliot">
            <div className="popular-goods">
                <h1>Popular Categories</h1>
                
                <div className="photos-items">
                  <img src={bodylotion} />
                  <img src={sports} />
                  <img src={computergudget} />
                  <img src={earphones} />
                  <img src={watch} />
                  <img src={clothes} />
                </div>
                </div>
            </div>
            <div className="new-progress">
       <h1>New Arrival Products</h1>
       <div className="arrival-products">
       <div className="water-container">
             <ul>
                <img src={bottle} /><p><li>All One Bottle</li>
                     $22.00-$55.00
                </p></ul></div>
                <div>
                <ul>
                <img src={amazon} /><p><li>Amazon Alexa</li> 
                    $49.00-$69.00
                </p></ul></div>
                <div>
                <ul>
                <img src={headsets} /><p><li>Header Gamer Legion</li> 
                    $22.00-$55.00
                </p></ul></div>
                </div>
                </div>
                <div className="work-shop">
                <button>SHOP NOW</button>
                </div>
                <div className="dress-model">
                <h1>Our Vendor List</h1>
               
                    <div className="monica-services">
                        <div className="woman-clothes">
                   <div className="santana-market">         
                 <img src={santashop} /><h2>Santa 
                    Monica's 
                    Store</h2>
                   <h5>New York,NY </h5><div className="greate-icon"><FaChevronCircleRight /></div></div>
                   <div className="dollar-cars">
                 <img src={babydollar} /><h2>Josh Doe's Store </h2>
                    <h5>New York ,NY </h5><FaChevronCircleRight /></div> 
                    <div className="digital-systems">                                                                                                             
                 <img src={digitalhouse} /><h2>Digital Good's Store</h2>
                     <h5>New York, NY</h5><FaChevronCircleRight /></div></div>
                     
                     <div className="human-details">
                     <div className="store-jessy">
                 <img src={jessica} /><h2>Jessica's Store</h2>
                    <h5>New York, NY</h5><FaChevronCircleRight /></div>
                    <div >
                 <img src={glassmodern} /><h2>The Glass Store</h2>
                       <h5>New York, NY</h5><FaChevronCircleRight /></div>
                     <div> 
                 <img src={kigalimodel} /><h2>John Doe's Store</h2>
                    <h5>New York, NY</h5><FaChevronCircleRight />
                    </div></div>
                    </div>
                    </div>
                    <button>SEE ALL VENDORS</button>
               <h1>Why People Choose Us</h1>
                 <div className="vendors-list">
                    <div className="easy-return">
               <div className="feedback-return"> 
                        
                <img src={easy} /></div>
                <h2>Easy Returns</h2>
                <p>Our return policy is simple and that is why customers love our shop</p></div>
                 <div className="customer-details">
                 <div className="salers-care">
                <img src={customerservice} /></div>
                <h2>Customer Service</h2>
                  <p>Our return policy is simple and that is why customers love our shop</p></div>
                  <div className="quantity-goods">
                  <div className="quality-products">
                <img src={highquality} /></div>
                 <h2>High Quality</h2>
                   <p>Our return policy is simple and that is why customers love our shop</p></div>
                   </div>
                   <h1>Explore Our Products</h1>
                   <div className="details-explores">
                   <div className="alexa-zone">
                   <ul>
                   
                <img src={bottle} /><p><li>All One Bottle</li>
                     $22.00-$55.00
                </p></ul>
                <div>
                <ul>
                <img src={amazon} /><p><li>Amazon Alexa</li> 
                    $49.00-$69.00
                </p></ul></div>
                <div>
                <ul>
            
                <img src={headsets} /><p><li>Header Gamer Legion</li> 
                    $22.00-$55.00
                </p>
                </ul>
                </div>
                </div>
                <div >
                <ul>
                    <div className="clock-wise">
                    <img src ={microphone} /><p><li>Headset Gamer Legion Plus</li> 
                        $22.00-$55.00
                    </p>
                    <img src ={clock} /><p><li>jDoe's Styling Watch</li> 
                        $22.00-$33.00
                    </p>
                    <img src ={camera} /><p><li>jessi Cam Recorder</li> 
                        $22.00-$55-00
                    </p></div>
                </ul></div>
                </div>
                <div className="decoration-dress">
                <button>VIEW ALL PRODUCTS</button>
                </div>
                <div className="follow-us">
                <h1>Follow us on @instagram</h1>
                </div>
                <div className="fashion-design">
                <img src={chicago} />
                <img src={ethiopian} />
                <img src={russian} />
                <img src={asian} />
                <img src={chinese} />
                <img src={italian} />
                </div>
        </>
    )
}
export default Home;