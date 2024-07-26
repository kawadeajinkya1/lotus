import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import classes from "./Form.module.css"
import axios from 'axios'



const Form = () => {


    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Ensure month and day have leading zeros if needed
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        return `${year}-${month}-${day}`;
    };


    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        identification: '',
        identificationNumber: '',
        email: '',
        mobno: '',
        checkInDate: '',
        checkInTime: '',
        checkOutDate: '',
        checkOutTime: '',
        numOfAdults: '',
        numOfChildren: '',
        roomType1: '',
        roomType: '',
        ac: false,
        numOfBeds: '',
        numOfRooms: '',
        totalGuests: '',
        price: '',
        Totalprice: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'numOfBeds') {
            // When changing the number of beds, update the price based on the selected room type
            const updatedPrice = calculatePrice(formData.roomType1, value);
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
                price: updatedPrice
            }));
        } else {
            // For other fields, simply update the form data
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
                Totalprice: name === "numOfRooms" ? value * prevState.price : prevState.Totalprice
            }));
        }
    };

    // Function to calculate the price based on room type and number of beds
    const calculatePrice = (roomType, numOfBeds) => {
        switch (roomType) {
            case 'executive':
                return numOfBeds === 'single' ? '1050' : '1280';
            case 'Mini Suite':
                return numOfBeds === 'single' ? '1250' : '1600';
            case 'Suite':
                return numOfBeds === 'single' ? '1900' : '1900';
            default:
                return ''; // Return empty string for other cases
        }
    };

    const handleNumChange = (e) => {
        const { name, value } = e.target;
        if (!isNaN(value) && parseInt(value) >= 0 && parseInt(value) <= 100) {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (new Date(formData.checkOutDate) <= new Date(formData.checkInDate)) {
            alert('Check-out date must be greater than check-in date');
            return; // Prevent form submission if check-out date is not greater
        }

        if (!formData.price) {
            alert('Please Select Room Type And No Of Beds Again');
            return; // Prevent form submission if price is empty
        }

        if (parseInt(formData.age) < 18) {
            alert('Age must be 18 or above');
            return; // Prevent updating state if age is below 18
        }

        try {
            console.log(formData)
           // await axios.post('http://localhost:8001/sendemail', formData);
           await axios.post('https://lotus.exads.in/sendemail', formData);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form. Please try again later.');
        }
    };

    return (
        <div className={classes.kd}>
                <NavBar />
<br/>

        
<center>
                <br />
                <form  className={classes.form1} onSubmit={handleSubmit} >
                  <h4>Fill The Form TO Book Your Room Now !</h4>
                    <div className={classes.form}>
                        <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label><br/>
                        <input type="text" className={classes.formcontrol} id="name" name="name"  value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender:</label><br/>
                        <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age:</label><br/>
                        <input type="number" className={classes.formcontrol} id="age" name="age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Identification:</label><br/>
                        <select className="form-select" name="identification" value={formData.identification} onChange={handleChange} required>
                            <option value="" disabled>Select Identification</option>
                            <option value="ADHAR">ADHAR</option>
                            <option value="PAN">PAN</option>
                            <option value="DRIVING LICENCE">DRIVING LICENCE</option>
                        </select>
                    </div>
                    {/* Conditional rendering of identification number input based on selected identification type */}
                    {formData.identification === 'ADHAR' && (
                        <div className="mb-3">
                            <label>ADHAR Number:</label><br/>
                            <input type="text" className={classes.formcontrol} name="identificationNumber" value={formData.identificationNumber} onChange={handleChange} pattern="[0-9]{12}" minLength={12} maxLength={12} required />
                        </div>
                    )}
                    {formData.identification === 'PAN' && (
                        <div className="mb-3">
                            <label>PAN Number:</label><br/>
                            <input type="text" className={classes.formcontrol} name="identificationNumber" value={formData.identificationNumber} onChange={handleChange} pattern="[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}" minLength={10} maxLength={10} required />
                        </div>
                    )}
                    {formData.identification === 'DRIVING LICENCE' && (
                        <div className="mb-3">
                            <label>Driving Licence Number:</label><br/>
                            <input type="text" className={classes.formcontrol} name="identificationNumber" value={formData.identificationNumber} onChange={handleChange} pattern="[A-Za-z]{2}[0-9]{10}" minLength={12} maxLength={12} required />
                        </div>
                    )}


                    <div className="mb-3">
                        <label>Email:</label><br/>
                        <input type="email" className={classes.formcontrol} name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  <div className="mb-3">
                        <label>Mobile no:</label><br/>
                        <input type="text" className={classes.formcontrol} name="mobno" value={formData.mobno} onChange={handleChange} minLength={10} maxLength={10} pattern="[0-9]{10}" required />
                    </div>
                    <div className="mb-3">
                        <label>Check-in Date:</label><br/>
                        <input type="date" className={classes.formcontrol} name="checkInDate" value={formData.checkInDate} min={getCurrentDate()} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Check-in Time:</label><br/>
                        <input type="time" className={classes.formcontrol} name="checkInTime" value={formData.checkInTime} onChange={handleChange} required />
                    </div>
<br/><br/>
                    </div>

                                 <div>
                    <div className="mb-3">
                        <label>Check-out Date:</label><br/>
                        <input type="date" className={classes.formcontrol} name="checkOutDate" value={formData.checkOutDate} min={formData.checkInDate} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Check-out Time:</label><br/>
                        <input type="time" className={classes.formcontrol} name="checkOutTime" value={formData.checkOutTime} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>No of Adults:</label><br/>
                        <input type="number" className={classes.formcontrol} name="numOfAdults" value={formData.numOfAdults} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label>No of Children:</label><br/>
                        <input type="number" className={classes.formcontrol} name="numOfChildren" value={formData.numOfChildren} onChange={handleNumChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Room Type:</label><br/>
                        <select className="form-select" name="roomType1" value={formData.roomType1} onChange={handleChange} required>
                            <option value="" disabled>Select Room Type</option>
                            <option value="executive">Executive Rooms</option>
                            <option value="Mini Suite">Mini Suite Rooms</option>
                            <option value="Suite">Suite Rooms</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>AC / Non AC</label><br/>
                        <select className="form-select" name="roomType" value={formData.roomType} onChange={handleChange} required>
                            <option value="" disabled>Select Room Type</option>
                            <option value="Ac">Ac Rooms</option>
                            <option value="NonAc">Non-Ac Rooms</option>

                        </select>
                    </div>
                    <div className="mb-3">
                        <label>No of Beds:</label><br/>
                        <select className="form-select" name="numOfBeds" value={formData.numOfBeds} onChange={handleChange} required>
                            <option value="" disabled>Select No of Beds</option>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                        </select>
                    </div>
                    {formData.roomType1 === 'executive' && (
                        <div className="mb-3">
                            <label>Your Approximately Price in ₹  For 1 room:</label><br/>
                            <input type="text" className={classes.formcontrol} name="price" value={formData.price} readOnly />
                        </div>
                    )}
                    {formData.roomType1 === 'Mini Suite' && (
                        <div className="mb-3">
                            <label>Your Approximately Price in ₹ :</label><br/>
                            <input type="text" className={classes.formcontrol} name="price" value={formData.price} readOnly />
                        </div>
                    )}
                    {formData.roomType1 === 'Suite' && (
                        <div className="mb-3">
                        <label>Your Approximately Price in ₹ :</label><br/>
                            <input type="text" className={classes.formcontrol} name="price" value={formData.price} readOnly />
                        </div>
                    )}

                    <div className="mb-3">
                        <label>No of Rooms:</label>
                        <select className="form-select" name="numOfRooms" value={formData.numOfRooms} onChange={handleChange} required><br/>
                            <option value="" disabled>Select No of Rooms</option>
                            {[...Array(10)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>

                  
 </div>
 </div>
 
     

                    <button type="submit" className="btn btn-primary mb-5">Submit</button>
                  
                </form>
          </center>
            <br />
            <br />
            <br />


        </div>
    );
};

export default Form;