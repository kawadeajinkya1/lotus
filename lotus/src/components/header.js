import lotus from '../Assets/lotus.png';
import telephone from '../Assets/telephone (1).png';
import communication from '../Assets/communication.png';
import twitter from '../Assets/twitter.png';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import whatsapp from '../Assets/whatsapp.png';

const header = () => {
    return(
        <>
        <footer class="middle-footer bg-black">
                <div class="container-fluid middle-footer pt-3">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-4 text-center">
                            <h4 class="text-white">EVENTS & OFFERS</h4>
                        </div>
                        <div class="col-md-4">
                            <form class="form-inline justify-content-center">
                                <div class="form-group mb-2">
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Your email address" />
                                </div>
                                <button type='submit' class="btn btn-primary mb-2 ml-2">Sign in</button>
                            </form>
                        </div>
                        <div class="col-md-4 text-center">
                            <div class="social-icons">
                                <a class="p-1" href=""><img src={facebook} alt="" height="30px" width="30px" class="border border-3 rounded-circle rounded-4" /></a>
                                <a class="p-1" href=""><img src={twitter} alt="" height="30px" width="30px" class="border border-3 rounded-circle rounded-4" /></a>
                                <a class="p-1" href=""><img src={whatsapp} alt="" height="30px" width="30px" class="border border-3 rounded-circle rounded-4" /></a>
                                <a class="p-1" href=""><img src={instagram} alt="" height="30px" width="30px" class="border border-3 rounded-circle rounded-4" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="full-footer">
                    <div class="container-fluid top-footer mt-5 p-0 bg-dark text-white p-md-3 p-1">
                        <div class="row">
                            <div class="col-md-3 pl-4 pr-4">
                                <img class="img-fluid align-self-center" src={lotus} alt=" " height="200px" width="200px" /><br />
                                <strong class="text-center text-white">Hotel Lotus Lodge and Guest House</strong><br />
                            </div>

                            <div class="col-md-3  pl-4 pr-4">
                                <h3>Important Links</h3>
                                <a href=" ">Privacy Policy</a><br />
                                <a href=" ">Youtube Channel Link </a><br />
                                <a href=" ">Blog Articles </a><br />
                                <a href=" ">Social Media</a>

                            </div>

                            <div class="col-md-3  pl-4 pr-4">
                                <h3>Our Services</h3>
                                <a href=" ">Restaurant </a><br />
                                <a href=" ">Events</a><br />
                                <a href=" ">Swimming-pool</a><br />
                                <a href=" ">Playground</a><br />
                                <a href=" ">Car rental</a><br />
                                <a href=" ">Doctor on Call</a>
                            </div>

                            <div class="col-md-3  pl-4 pr-4">
                                <h3>Contact Us</h3>
                                <a href=" "><img src={telephone} alt=" " height="25px" width="25px" />&nbsp; 8888666524 / 9766554435  </a><br />
                                <a href=" "><img src={communication} alt=" " height="25px" width="25px" />&nbsp;hello@thelostushotel.com  </a><br />
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484444.27423762245!2d73.7652497!3d18.4509775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2958c1ae1364b%3A0xbbc72f3cffe9d435!2sLotus%20Lodge%20and%20Guest%20House!5e0!3m2!1sen!2sus!4v1714027758104!5m2!1sen!2sus" frameborder="0"></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container-fluid bottom-footer pt-2">
                        <div class="row">
                            <div class="col-12 text-center">
                                <p>Copyright © 2024 lotus | Powered by lotus | Created by EXADS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default header;