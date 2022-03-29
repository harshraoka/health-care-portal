import React, { useState } from 'react';
import doctors from "./data/Data_doctor";
import '../css/Thank.css';
const Thankyou = () => {
    return (
        <>
           <div className='containerthank'>
               <div className='cardthank'>
               <h2>Thank you, 
                   <br />
                   your appointment has been booked</h2>
                   
               <h4>Please be on time for your appointment</h4>
               </div>
               
           </div>
        </>
    )
}
export default Thankyou