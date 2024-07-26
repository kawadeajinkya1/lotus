import React, { useState,useEffect } from 'react';
import Foot from "./FOOTER/Foot";
import l1 from '../Assets/l1.jpg';
import l2 from '../Assets/l2.jpeg';
import l3 from '../Assets/l3.jpg';
import l4 from '../Assets/l4.jpg';
import l5 from '../Assets/l5.jpg';
import l6 from '../Assets/l6.jpg';
import l7 from '../Assets/l7.jpg';
import l8 from '../Assets/l8.jpg';
import l9 from '../Assets/l9.jpg';
import l11 from '../Assets/l11.jpg';
import l12 from '../Assets/l12.jpg';
import l13 from '../Assets/l13.jpg';
import l14 from '../Assets/l14.jpg';
import l16 from '../Assets/l16.jpg';
import classes from "./Gallery.module.css";
import NavBar from './NavBar';

const Gallery = () => {

        useEffect(()=> {
        window.scrollTo(0,0)
    })

    const [popupImageSrc, setPopupImageSrc] = useState('');

    const handleImageClick = (src) => {
        setPopupImageSrc(src);
    };

    const handleClosePopup = () => {
        setPopupImageSrc('');
    };

    return (
        <>
            
            <div className="container-fluid">
                <div className="col">
                    <div className="bg-image">
                    <NavBar/>
                        <div className="blur-overlay"></div>
                        <div className="text-on-bg">
                            <h2>OUR GALLERY</h2>
                            <p>Welcome to our Gallery of Lotus Hotel, where every masterpiece is a reflection of serenity and sophistication.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.imgcontainer}>
                    <div className={classes.image}><img src={l1} alt="" onClick={() => handleImageClick(l1)} /></div>
                    <div className={classes.image}><img src={l2} alt="" onClick={() => handleImageClick(l2)} /></div>
                    <div className={classes.image}><img src={l3} alt="" onClick={() => handleImageClick(l3)} /></div>
                    <div className={classes.image}><img src={l4} alt="" onClick={() => handleImageClick(l4)} /></div>
                    <div className={classes.image}><img src={l5} alt="" onClick={() => handleImageClick(l5)} /></div>
                    <div className={classes.image}><img src={l6} alt="" onClick={() => handleImageClick(l6)} /></div>
                    <div className={classes.image}><img src={l7} alt="" onClick={() => handleImageClick(l7)} /></div>
                    <div className={classes.image}><img src={l8} alt="" onClick={() => handleImageClick(l8)} /></div>
                    <div className={classes.image}><img src={l9} alt="" onClick={() => handleImageClick(l9)} /></div>
                    <div className={classes.image}><img src={l11} alt="" onClick={() => handleImageClick(l11)} /></div>
                    <div className={classes.image}><img src={l12} alt="" onClick={() => handleImageClick(l12)} /></div>
                    <div className={classes.image}><img src={l13} alt="" onClick={() => handleImageClick(l13)} /></div>
                    <div className={classes.image}><img src={l14} alt="" onClick={() => handleImageClick(l14)} /></div>
                    <div className={classes.image}><img src={l16} alt="" onClick={() => handleImageClick(l16)} /></div>
                    <div className={classes.image}><img src={l3} alt="" onClick={() => handleImageClick(l3)} /></div>
                </div>
                {popupImageSrc && (
                    <div className={classes.popupimage} onClick={handleClosePopup}>
                        <span>&times;</span>
                        <img src={popupImageSrc} alt="" />
                    </div>
                )}
            </div>
            <Foot />
        </>
    );
}

export default Gallery;



