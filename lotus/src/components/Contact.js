import React,{useState,useEffect} from 'react'
import map from '../Assets/map.png';
import tc from '../Assets/telephone-call.png';
import Foot from './FOOTER/Foot';
import NavBar from '../components/NavBar';
import classes from "./Contact.module.css";
import styles from './Contact.module.css';

const Contact = (() =>{

    useEffect(()=> {
        window.scrollTo(0,0)
    })

   const clkhnd=()=>{
        alert("Thank You, We will get back soon.");
    };

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
                                    <h2>CONTACT WITH US</h2>
                                    <p>Connect with Lotus Hotel for an unforgettable experience. Reach out to us today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                    <div className="ri">
                        <div class="col-md-6">
                            <p class="fs-2 text-center font-weight-bold punderline">Get Connected</p>
                        <div className="container mt-4">
      <form className={classes.edeg} action='https://formsubmit.co/nasreensshaikh06@gmail.com' method='POST' >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name<span className="text-danger">*</span>
          </label>
          <input type="text" className={`form-control ${styles.customHeight}`} id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number<span className="text-danger">*</span>
          </label>
          <input type="tel" className={`form-control ${styles.customHeight}`} id="mobile" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address<span className="text-danger">*</span>
          </label>
          <input type="email" className={`form-control ${styles.customHeight}`} id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea id="message" className={`form-control ${styles.customHeight}`} rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-success float-md-start" onClick={clkhnd}>
          Submit
        </button>
      </form>
    </div>
                        </div>
                        <div className={`col-md-6  ${styles.customd}`}>

                            <center>



                                <div className={classes.yx1}>




                                    <div className={classes.kk}>
                                        <img src={tc} className={classes.qo1}></img>
                                        <br />
                                        <br />
                                        <p className={classes.ph2}>

                                            <a href="tel: 8888666524" className={classes.kzk}>+91 8888666524</a>
                                            <br></br>
                                            <a href="tel:9762439208" className={classes.kzk}>+91 9766554435</a>


                                        </p>

                                    </div>


                                    <br />

                                    <div className={classes.kk}>
                                        <img src={map} className={classes.qo1}></img>
                                        <br />
                                        <br />
                                        <p className={classes.ph2}><a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484444.27423762245!2d73.7652497!3d18.4509775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2958c1ae1364b%3A0xbbc72f3cffe9d435!2sLotus%20Lodge%20and%20Guest%20House!5e0!3m2!1sen!2sus!4v1714027758104!5m2!1sen!2sus" className={classes.kzk}>Hotel Lotus Lodge and Guest House, Pune, Maharashtra-411023  </a></p>
                                    </div>



                                </div>
                       <br/><br/>

                            <div class="embed-responsive embed-responsive-16by9" >
                                <iframe class="embed-responsive-item border border-3 border border-dark rounded-4" className={classes.size} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484444.27423762245!2d73.7652497!3d18.4509775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2958c1ae1364b%3A0xbbc72f3cffe9d435!2sLotus%20Lodge%20and%20Guest%20House!5e0!3m2!1sen!2sus!4v1714027758104!5m2!1sen!2sus"  ></iframe>
                            </div>                            </center>
                        </div>
                    </div >
                </div >
                <br />
            </div>
            <Foot />
        </>
    );
}
)

export default Contact
