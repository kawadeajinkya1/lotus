import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lotus from '../Assets/lotus.png';
import telephone from '../Assets/telephone (1).png';
import communication from '../Assets/communication.png';
import twitter from '../Assets/twitter (1).png';
import facebook from '../Assets/facebook (1).png';
import instagram from '../Assets/social.png';
import whatsapp from '../Assets/whatsapp (1).png';
import { FaHouseDamage, FaAddressCard, FaList, FaAddressBook } from "react-icons/fa";
import './Nav.css';

const NavBar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [scrolled, setScrolled] = useState(false);

    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else {
            setActive("nav__menu");
        }

        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else {
            setIcon("nav__toggler");
        }
    };

    const resetNavbar = () => {
        setActive('nav__menu');
        setIcon('nav__toggler');
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nasv">
            <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
                <div className='header'>
                    <div className='h1'>
                      
                    </div>
                    <div className='ss'>
                        <div className='d-flex mt-1'> <img src={telephone} className='icon2 jj' />
                        <a href="tel:8888666524" className='mail mail1'>Phone: 8888666524 </a>
                      </div> 
                          <div className='d-flex'>  
                        <img src={communication} className='icon3 jj' />
                        <a href="mailto:hello@lotus.com" className='mail mail2'>Email: hello@lotus.com</a>
                        </div>
                            <div className='d-flex fr'> 
                        <a href=''><img src={twitter} className='ims'></img></a>
                        <a href=''><img src={facebook} className='ims'></img></a>
                        <a href=''><img src={instagram} className='ims'></img></a>
                        <a href=''><img src={whatsapp} className='ims'></img></a>
                   </div>
                    </div>
                </div>
                <div className='header2'>
                    <div className='logo2'>
                        <center>
                        <img src={lotus} className='lo'></img>
                        <h6 className="text-center">Lotus Lodge And Guest House</h6>
                    </center>
                    </div>
                    <div className='nd'>
                        <div className={active}>
                            <ul className='ul'>
                                <li className="list"><Link to='/' className="list" onClick={resetNavbar}><FaHouseDamage className='icon2' />&nbsp;Home</Link></li>
                                <li className="list"><Link to='/About' className="list" onClick={resetNavbar}><FaAddressCard className='icon2' />&nbsp;About</Link></li>
                                <li className="list"><Link to='/Booking' className="list" onClick={resetNavbar}><FaList className='icon2' />&nbsp;Booking</Link></li>
                                <li className="list"><Link to='/Gallery' className="list" onClick={resetNavbar}><FaList className='icon2' />&nbsp;Gallery</Link></li>
                                <li className="list"><Link to='/Contact' className="list" onClick={resetNavbar}><FaAddressBook className='icon2' />&nbsp;Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div onClick={navToggle} className={icon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;


/*

  <a href="tel:9766554435" className='mail mail1'>/ 9766554435</a>
  */