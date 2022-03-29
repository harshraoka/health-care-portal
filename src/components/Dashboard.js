import React, { useState, useEffect } from 'react';
import '../css/dashboard.css';
import patients from './data/Data_patients';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

const Dashboard = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className='headerdash'>
            <h2>Your Dashboard</h2>
            </div>
            
            {patients.map((total) => {
                return (
                        <div className='dashcontainer'>
                            <div key={total.name} className='carddash'>
                        <span>
                        <h4>Name: {total.name}</h4>
                            <h4>Email: {total.email}</h4>
                            <h4>Symptoms: {total.symptoms}</h4>
                            <h4>Date: {total.date}</h4>
                            <h4>Time: {total.time}</h4>
                            
                                <button>completed</button>
                                <button className='buttonsfailiure'>postpone</button>
                        </span>
                           
                            
                        

                    </div>
                        </div>
                    
                )
            })}
        </>
    )
}
export default Dashboard