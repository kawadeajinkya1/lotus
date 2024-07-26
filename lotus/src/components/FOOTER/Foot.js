import React from 'react'
import { useRef } from 'react';

import "./Foot.css"
import logo2 from './../../Assets/lotus.png';
import Heart from "./../../Assets/eziigj.gif"



const Foot = () => {


    const form = useRef();

    /*const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5nlyw6e', 'template_bd7vtha', form.current, 'bsz7LIwTvX6ZYGIM3')
        .then((result) => {
  
          alert("Message Sent Successfully !!!")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
*/
  return (
    <div className='footer'>

<div className='footer1'>

     <div className='column in'>
    
    <div>
<img src={logo2} className="fi"/>
{/* <h4 className='fh4'>AMBIONICS</h4> */}
<p className='fp'>Our goal is to ensure a flawless booking process and an amazing stay for you.</p>
    </div>


</div>   

<br />
<div className='column cd'>
    
    <div>
<p className='fh5'>EMAIL :</p>
<a className='fp2' href="mailto:sales@ambionicsindia.com">sales@lotus.com</a>  
    </div>

    <div>
<p className='fh5'>PHONE :</p>
<a className='fp2' href="tel:8888666524">+91 8888666524
 </a>  <br/>
<a className='fp2' href="tel:9766554435">+91 9766554435
 </a>  
    </div>

   



</div>
<br></br>


<div className='column ql'>
    <p className='fh5'>QUICK LINKS</p>
<div  className='hu'>
    <li><a href="/ " className='apal'>Home</a></li>
    <li><a href="/about" className='apal'>About</a></li>
    <li><a href="/booking" className='apal'>Booking</a></li>
    <li><a href="/gallery" className='apal'>Gallery</a></li>
    <li><a href="/contact" className='apal'>Contact</a></li>

</div>
</div>

<br />

<div className='column ap'> 
{/*
<p className='fh5'>ENQUIRE HERE</p>

<div  className='hu2'>
<li><a href="/PowerPanel" className='apal'>POWER PANEL</a></li>
<li><a href="/ControlPanel" className='apal'>CONTROL PANEL</a></li>
<li><a href="/GeneratorPanels" className='apal'>GENERATOR PANEL</a></li>
<li><a href="/AutomationPanels" className='apal'>AUTOMATION PANEL</a></li>
<li><a href="/LoadBank" className='apal'>LOAD BANK</a></li>
<li><a href="/PLCPanel" className='apal'>PLC BANK</a></li>
<li><a href="/OperatorPanels" className='apal'>OPERATOR PANEL </a></li>
<li><a href="/BatteryCharger" className='apal'>BATTERY CHARGER </a></li>
<li><a href="/UPS" className='apal'>UPS </a></li>
<li><a href="/SpecialPurposeMacines" className='apal'>SPECIAL PURPOSE MACHINE </a></li>
<li><a href="/HydroTestingMacine" className='apal'>HYDRO TESTING MACHINE</a></li>
<li><a href="/BushPressingMachine" className='apal'>BUSH PRESSING MACHINE</a></li>
<li><a href="/NutRunnerMachine" className='apal'>NUT RUNNER MACHINE</a></li>
<li><a href="/AssemblyFIxtures" className='apal'>ASSEMBLY FIXTURES</a></li>

</div>


<form  ref={form} onSubmit={sendEmail}>

<input placeholder='ENTER YOUR NAME' className='I1' name='name' id='name' type="text"></input><br />
<input placeholder='ENTER MOBILE NO' maxLength={10} className='I1' name='phn' id='phn' type="text"></input><br />
<input placeholder='ENTER YOUR EMAIL ID' className='I1' name='mail' id='mail' type="email"></input><br />
<textarea placeholder='DESCRIPTION' rows="4" className='t1' name='des' id='des'></textarea><br />
<input type="submit" value="SUBMIT" />
</form>

*/}

 <div>
<p className='fh5'>ADDRESS :</p>
<a className='fp2'>Hotel Lotus Lodge and Guest House, Pune, Maharashtra-411023 </a>  
    </div>


</div>

</div>

<div className='footer2'>
<center className='klk'>Copyright © 2024 Lotus | Made with <img src={Heart} className="hrt"></img> by CORTICA WEB SOLUTIONS PVT LTD</center>
</div>

    </div>
  )
}

export default Foot