import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Form from "./Form"
import Footer from "./../components/FOOTER/Foot"
import axios from 'axios'



const Booking = () => {


useEffect(()=>{
    window.scrollTo(0,0)
})

    return (
        <div >
                <NavBar />
                <Form />
                <Footer />

        </div>
    );
};

export default Booking;