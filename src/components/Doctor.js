import React, { useState, useEffect } from 'react';
import doctors from "./data/Data_doctor";
import '../css/Doctor.css';
import { Link } from 'react-router-dom';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

const Doctors = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className='headingdoc'><h1> List Of Doctors</h1></div>
            
           
            {doctors.map((total) => {
                return (
                
                    <div className='containerdoc'>
                        <div key={total.id} className='card'>
                        <span>
                            <img src={total.img} alt={total.name} className='person-img' />
                            <h4>Name: {total.name}</h4>
                            <h4>Speciality: {total.speciality}</h4>
                            <p>Info: {total.info}</p>
                       
                <Link to="/Dashboard">
                    <button>see more</button>
                </Link>
                            
                        </span>

                    </div>
                    </div>
                )
            })}
        </>
    )
}
export default Doctors