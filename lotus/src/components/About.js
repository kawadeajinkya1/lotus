import React,{useEffect} from "react";
import l2 from "../Assets/l2.jpeg";
import l5 from "../Assets/l5.jpg";
import l9 from "../Assets/l9.jpg";
import Foot from "./FOOTER/Foot";
import person from "../Assets/person.png";
import shopping from "../Assets/grocery-store.png";
import bus from "../Assets/front-of-bus.png";
import fort from "../Assets/fort.png";
import fork from "../Assets/fork.png";
import airplane from "../Assets/airplane.png";
import hopital from "../Assets/hopital.png";
import NavBar from '../components/NavBar';
import "./../App.css"
const About = () => {
        useEffect(()=> {
        window.scrollTo(0,0)
    })
    return (
        <>
        <div class="custom-bg-color">
        <div className="container-fluid p-0 mt-10">
    <div className="ri">
        <div className="col">
            <NavBar />
                    
                        <div class="bg-image">
                        <div class="blur-overlay"></div>
                            <div class="text-on-bg">
                                <h2>ABOUT LOTUS</h2>
                                <p>Lotus Hotel is a serene accommodation nestled in the heart of the city, offering guests a tranquil retreat with modern amenities and personalized service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-5 ">
                <div className="ri">
                    <div class="col-md-6">
                        <div class="carousel slide" data-bs-ride="carousel" id="mygallery">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={l2} class="img-margin" />
                                </div>
                                <div class="carousel-item active">
                                    <img src={l5} class="img-margin" />
                                </div>
                                <div class="carousel-item active">
                                    <img src={l9} class="img-margin" />
                                </div>
                            </div>
                            <a href="" class="carousel-control-prev" data-bs-slide='prev' data-bs-target="#mygallery">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a href="" class="carousel-control-next" data-bs-slide='next' data-bs-target="#mygallery">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4 class="text-center">ABOUT US</h4>
                        <p class="text-center underline apply-padding">Best Lodge and Guest House in the Heart-of-the-City</p>
                        <div class="margin-paragraph">
                            At Lotus Hotel Booking, we believe that every journey begins with a perfect stay.We strive to make your booking experience seamless and your stay unforgettable.Are you planning a business trip soon? As a business traveller, you have probably checked into numerous receptions and endured the formalities, regulations, and exorbitant fees of those lodging establishments. You can enjoy stylish interiors and eye-catching design with a touch of personalisation in this exclusive and safe executive flat. OYO has installed a comprehensive suite of contemporary conveniences, including completely air-conditioned living quarters, LED/LCD TV, and high-speed internet, to provide you with a homelike experience.
                        </div>
                        <br />
                     
                    </div>
                </div>
            </div>



   <h4 class="text-center underline"></h4>
                        <div class="margin-paragraph">
                                 </div>



            <div class="container-fluid mt-5">
                <div className="ri">
                    <div class="col-md-6">
                        <h4 class="text-center underline">WHY GUEST CHOOSE LOTUS?</h4>
                        <div class="margin-paragraph">
                            User-Friendly Platform: Our website and mobile app are designed with you in mind, offering a seamless booking experience from start to finish. With just a few clicks, you can browse through thousands of properties, compare prices, and make secure bookings with ease.Our dedicated team of travel experts is available around the clock to assist you with any questions or concerns you may have.We work tirelessly to negotiate the best deals with our hotel partners, ensuring that you get the most value for your money. With our Best Price Guarantee, you can book with confidence, knowing that you're getting the lowest possible rates.
                          </div>
                    </div>
                    <div class="col-md-6">
                                 <img src={l9} class="imst" />
                    </div>
                </div>
            </div>





            <div class="container-fluid mt-5">
                <div className="ri">
                    <div class="col-md-6">
                        <h4 class="text-center underline">PREMIUM FACILITIES</h4>
                        <div class="margin-paragraph">
                            At Lotus, we’re excited to offer you the best possible mix of seclusion, room, and well-equipped common areas. Customer service is offered around-the-clock as needed.
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4 class="text-center underline">GREATE FOOD EXPERIENCE</h4>
                        <div class="margin-paragraph">
                            We are aware of how much you miss eating meals prepared at home while you’re at work putting together countless PowerPoints, meetings, and presentations. 
                        </div>
                    </div>
                </div>
            </div>


            <br/><br/><br/>
            <div class="container-fluid mt-5">
                <h3 class="text-center text-uppercase punderline">Hotel's Surrounding</h3><br /> <br></br><br/>
                <div className="ri1">
                    <div class="col-md-6">
                          <br/><br/>
                        <h4 class="text-center text-uppercase punderline"><img src={person} alt="" height="35px" width="35px" />&nbsp;&nbsp;What's nearby</h4>
                        <div class="ri2 margin">
                            <div class="col-md-9 col-9">
                                <p class="text-start">Khadakwasla Dam View Point</p>
                                <p class="text-start">Khadakwasla Backwaters</p>
                                <p class="text-start">Jade, by the River, Resort & Camping</p>
                            </div>
                            <div class="col-md-3 col-3">
                                <p class="text-end">0.72Km.</p>
                                <p class="text-end">0.80Km.</p>
                                <p class="text-end">0.40Km.</p>
                            </div>
                        </div>

                          <br/><br/>
                        <h4 class="text-center text-uppercase punderline"><img src={fort} alt="" height="30px" width="30px" />&nbsp;&nbsp;Top Attractions</h4>
                        <div class="ri2 margin">
                            <div class="col-md-9 col-9">
                                <p class="text-start">Shaniwar wada</p>
                                <p class="text-start">Lal Mahal</p>
                                <p class="text-start">Katraj Snake Park</p>
                                <p class="text-start">Raja Dinkar Kelkar Museum</p>
                                <p class="text-start">Dagadusheth Halavai Ganapati</p>
                            </div>
                            <div class="col-md-3 col-3">
                                <p class="text-end">13.8Km.</p>
                                <p class="text-end">13.8Km.</p>
                                <p class="text-end">14.9Km.</p>
                                <p class="text-end">14.4Km.</p>
                                <p class="text-end">13.9Km.</p>
                            </div>
                        </div>
                          <br/><br/>
                        <h4 class="text-center text-uppercase punderline"><img src={airplane} alt="" height="30px" width="30px" />&nbsp;&nbsp;Closest Airports</h4>
                        <div class="ri2 margin">
                            <div class="col-md-9 col-9">
                                <p class="text-start">Pune International Airport</p>
                            </div>
                            <div class="col-md-3 col-3">
                                <p class="text-end">24.6Km.</p>
                            </div>
                        </div>  <br/><br/>

                        <h4 class="text-center text-uppercase punderline"><img src={hopital} alt="" height="30px" width="30px" />&nbsp;&nbsp;Health Care</h4>
                        <div class="ri2 margin">
                            <div class="col-md-9 col-9">
                                <p class="text-start">Mai Mangeshkar Hospital</p>
                                <p class="text-start">Vinayak Laparoscopy Hospital</p>
                                <p class="text-start">SHREE CLINIC & SHREE DIAGNOSTIC (Redcliffe Labs)CENTRE</p>
                            </div>
                            <div class="col-md-3 col-3">
                                <p class="text-end">6.3Km.</p>
                                <p class="text-end">6.6Km.</p>
                                <p class="text-end">4.1Km.</p>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div class="col-md-6">
                        <h4 class="text-center text-uppercase punderline"><img src={fork} alt="" height="30px" width="30px" />&nbsp;&nbsp;Restaurants & cafes</h4>
                        <div class="ri2 smargin">
                            <div class="col-md-9 col-9">
                                <p class="text-start">Shree Snacks Centre</p>
                                <p class="text-start">Sonai Wadewale and Snacks</p>
                                <p class="text-start">Anjani veg non veg</p>
                                <p class="text-start">Hotel Jai Shankar And Family Chinese</p>
                                <p class="text-start">Balaji Bhel and snacks</p>
                                <p class="text-start">Shagun Chicken Centre</p>
                            </div>
                            <div class="col-md-3 col-3">
                                <p class="text-end">1.44Km.</p>
                                <p class="text-end">0.02Km.</p>
                                <p class="text-end">0.10Km.</p>
                                <p class="text-end">0.24Km.</p>
                                <p class="text-end">0.26Km.</p>
                                <p class="text-end">1.47Km.</p>
                            </div>
                        </div>
                           <br/><br/>
                        <h4 class="text-center text-uppercase punderline"><img src={bus} alt="" height="30px" width="30px" />&nbsp;&nbsp;Public Transport</h4>
                        <div class="ri2 smargin">
                            <div class="col-md-9 col-9">
                                <p class="text-start">Train - Shivajinagar, Pune</p>
                                <p class="text-start">Train - Pune Station, Pune</p>
                                <p class="text-start">Metro - Vanaz Metro Station, Pune</p>
                                <p class="text-start">Metro - MaNaPa Metro Station, Pune</p>
                                <p class="text-start">Bus - NDA Gate Colony</p>
                            </div>
                            <div class="col-md-3 col-3">
                                <p class="text-end">14.9Km.</p>
                                <p class="text-end">16.4Km.</p>
                                <p class="text-end">10.1Km.</p>
                                <p class="text-end">14.1Km.</p>
                                <p class="text-end">0.09Km.</p>
                            </div>
                        </div>
                        <br/><br/>
                        <h4 class="text-center text-uppercase punderline"><img src={shopping} alt="" height="30px" width="30px" />&nbsp;&nbsp;Shopping Centres</h4>
                        <div class="ri2 smargin">
                            <div class="col-md-9 col-9">
                                <p class="text-start">More Mall</p>
                                <p class="text-start">Kothrud Dmart</p>
                                <p class="text-start">Warje Hub</p>
                                <p class="text-start">SHREE Shopping CENTRE</p>
                            </div>
                            <div class="col-md-3 col-3">
                                <p class="text-end">14.9Km.</p>
                                <p class="text-end">4.3Km.</p>
                                <p class="text-end">6.8Km.</p>
                                <p class="text-end">6.8Km.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <h3 class="text-center text-uppercase punderline"></h3><br/>
            </div>

            <Foot />
        </>
    )
}

export default About;