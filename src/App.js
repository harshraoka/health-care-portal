// Libraries
import React, { useState } from 'react'
import { Route } from 'react-router-dom'

// HOC
import HomeLayoutHOC from './HOC/Home.Hoc'

//import Loging from './components/Loging'
import Landingpage from './components/Landingpage'
import Doctors from './components/Doctor'
import Dashboard from './components/Dashboard' 
import Thankyou from './components/Thankyou'  
import Loging from './components/Loging'


const App = () => {
  
  return (
    <main>

      <section>
        {/* <Doctors></Doctors> */}
        {/* <Dashboard></Dashboard> */}
        {/* <Thankyou></Thankyou> */}

        {/* <HomeLayoutHOC path="./" exact component={Landingpage} /> */}
        {/* <Doctors path="./doctorlist" /> */}
         <Route path="/" exact component={Landingpage}/> 
      
        <Route path="/doctorlist" exact component={Doctors}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/loging" exact component={Loging}/>
        <Route path="/thankyou" exact component={Thankyou}/>

        
  
      
      </section>

    </main>
  )
}
export default App