import React,{useEffect} from 'react'
import Bedroom2 from '../Assets/Bedroom2.jpg';
import classes from './Home.module.css';
import l4 from '../Assets/l4.jpg';
import l6 from '../Assets/l6.jpg';
import l16 from '../Assets/l16.jpg';
import airconditioner from '../Assets/air-conditioner.png';
import wifi from '../Assets/wi-fi.png';
import hotelservice from '../Assets/hotel-service.png';
import parking from '../Assets/parking.png';
import monitor from '../Assets/monitor.png';
import handicap from '../Assets/handicap.png';
import Foot from './FOOTER/Foot';
import l2 from "../Assets/l2.jpeg";
import l3 from "../Assets/Bedroom2.jpg";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';



const Home = () => {
      const navigate = useNavigate();

          useEffect(()=>{
        window.scrollTo(0,0)
    })

    return (
        <>
            <div className="container-fluid p-0 mt-10">
                <div className="ri">
                    <div className="col">
                        <NavBar />
                        <div className={classes.bgvideo}>
            <video autoPlay loop muted className={classes.fullscreenbg__video}>
              <source src={require("../Assets/video.mp4")} type="video/mp4" />
            </video>
                            <div className="blur-overlay"></div>
                            <div className="text-on-bg">
                                <h2 className={classes.tex}>Welcome to <br/>
                                Lotus Lodge And Guest House</h2>
                                <p className='tex2'>Discover unparalleled comfort and convenience with Lotus Hotel Booking, your trusted partner in finding the perfect stay for every journey.</p>

                                <button className="btn text-white hover-text-green" onClick={() => navigate('/booking')}>Book Now</button>
                            </div>
       
                        </div>
                    </div>
                </div>
            </div>



            <div className={classes.steps}>

                <h1 className={classes.head}>Our Best Rooms</h1>
                <p className="text-center mt-6 ">These Rooms Are Our Customers' Top Picks.</p>
<p className='punderline'></p>

                <br  />
                <div className={classes.steps1}>
                    <div className={classes.dbn}> <img src={l4} className={classes.imgs} /> <h5 className={classes.ih3}>Excutive Rooms</h5>  <button className={classes.b2}><Link to='/booking' className={classes.be}>Book Your Room Now &nbsp; ›</Link></button> </div>
                    <div className={classes.dbn}> <img src={l6} className={classes.imgs} /> <h5 className={classes.ih3}>Mini Suite Rooms</h5>  <button className={classes.b2}><Link to='/booking' className={classes.be}>Book Your Room Now &nbsp; ›</Link></button> </div>
                    <div className={classes.dbn}> <img src={l16} className={classes.imgs} /> <h5 classNameModula={classes.ih3}>Suite Rooms</h5><button className={classes.b2}><Link to='/booking' className={classes.be}>Book Your Room Now &nbsp; ›</Link></button> </div>
                </div>
                <br /> <br />
                <br />
            </div>



            <div class="container-fluid" className={classes.backgroundcontainer}>
            <div className={classes.backgroundimage}></div>
            <div className={classes.backgroundoverlay}></div>
            <div className={classes.foregroundcontent}>
                <div className={classes.ri}>
                    <div class="col-md-6">
                        <div className={classes.marginparagraph}>
                            <h2 className={classes.head}>WHO WE ARE</h2>
                            <p className=' punderline'></p>
                            <br />
                          <p className={classes.kjd}> At Lotus Hotel Booking, we think that the ideal stay is the starting point of any adventure.Our goal is to ensure a flawless booking process and an amazing stay for you.Are you about to embark on a business trip? You have undoubtedly checked into a number of receptions as a business traveler and put up with the formalities, rules, and astronomical costs of those lodging accommodations. This upscale and secure executive apartment offers chic decor and striking design with a dash of customization. To give you a homelike experience, OYO has established a full range of modern amenities, such as fully air-conditioned living quarters, LED/LCD TV, and high-speed internet.
                        </p></div>
                    </div>
                    <div className="col-md-6">
                    <img src={Bedroom2} className={classes.carouselitemimg} />
                
                    </div>
                </div>
            </div>
        </div>
           
           
           
           
           
            <div>
                <div className={classes.wlc}>


                    <div className={classes.wl}>
                        <Fade Top>
                            <center>
                                <img src={l2} className={classes.i}></img>
                            </center>
                        </Fade>
                    </div>
                    <Zoom>
                        <div className={classes.wr}>
                            <h6 className={classes.head}>Hotel Facilities</h6>

                            <div className={classes.blks}>
                                <div className={classes.row}>
                                    <div className={classes.b1}>
                                        <div className={classes.im}>
                                            <img src={wifi} className={classes.img} />
                                        </div>
                                        <div className={classes.im2}>
                                            <p className={classes.bh1} > Wi-Fi Connectivity </p>
                                            <p className={classes.bh2} > In our hotel, you can expect a dependable and fast Wi-Fi connection.</p>
                                        </div>
                                    </div>
                                    <div className={classes.b1}>
                                        <div className={classes.im}>
                                            <img src={handicap} className={classes.img} />
                                        </div>
                                        <div className={classes.im2}>
                                            <p className={classes.bh1} > Wheel-chair Accessible</p>
                                            <p className={classes.bh2} > In our hotel, customers can easily access the wheel-chair.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.b1}>
                                        <div className={classes.im}>
                                            <img src={monitor} className={classes.img} />
                                        </div>
                                        <div className={classes.im2}>
                                            <p className={classes.bh1} > LCD TV </p>
                                            <p className={classes.bh2} > In our hotel, one LCD Tv is available in every room. </p>
                                        </div>
                                    </div>
                                    <div className={classes.b1}>
                                        <div className={classes.im}>
                                            <img src={parking} className={classes.img} />
                                        </div>
                                        <div className={classes.im2}>
                                            <p className={classes.bh1} > Free Parking </p>
                                            <p className={classes.bh2} > In our hotel, for customers free parking is available.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.b1}>
                                        <div className={classes.im}>
                                            <img src={hotelservice} className={classes.img} />
                                        </div>
                                        <div className={classes.im2}>
                                            <p className={classes.bh1} > Room Service </p>
                                            <p className={classes.bh2} > For customers help our hotel offers room service 24x7.</p>
                                        </div>
                                    </div>
                                    <div className={classes.b1}>
                                        <div className={classes.im}>
                                            <img src={airconditioner} className={classes.img} />
                                        </div>
                                        <div className={classes.im2}>
                                            <p className={classes.bh1} > Air Conditioning</p>
                                            <p className={classes.bh2} > For customers our hotel offers Air Conditioning 24x7.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>




<div class="container-fluid" className={classes.backgroundcontainer1}>
    <div className={classes.backgroundimage1}></div>
    <div className={classes.backgroundoverlay}></div>
    <div className={classes.foregroundcontent1}>
        <div className="row">
        
            <div class="col-md-8">
                <div className={classes.content1}>
                    <p>Why Client's Choose Lotus?</p>
                </div>
                <p className={classes.content2}>
                    User-Friendly Platform: We've created our website and mobile app with you in mind, providing a flawless booking process from beginning to end. You can easily search through thousands of properties, compare prices, and make safe bookings with just a few clicks.Our committed staff of travel specialists is on hand 24/7 to help you with any queries or worries you may have.To make sure you receive the most value for your money, we diligently strive to negotiate the best rates with our hotel partners. You can make reservations with confidence, knowing that you're getting the best deals around, thanks to our Best Price Guarantee.
                </p>
       
            </div>
            
      <div class="col-md-2">

         <center>
                 <img src={l3} className={classes.iz}></img>
                            </center>

      </div>

        </div>
    </div>
</div>

            <Foot />

        </>
    )

}
export default Home;