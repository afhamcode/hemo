import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
function HowItWorks() {

const Navigate=useNavigate();


  return (
  <section className='hemowork'>
     <h1>How Hemo Works</h1>
     <p>Connect people who need blood with willing donors through a simple, transparent process.</p>
     <div className='how-cards'
      onClick={()=>Navigate('/create blood request')}
     >
        <div className='card1'>
          <h3>Request Blood</h3> 
         <p>Create a blood request with the required blood group, units, hospital, and urgency.</p>
         </div>
           <div className='card2'>
          <h3>Find a Donor</h3>
           <p>Discover relevant blood requests and connect with willing donors.</p>
           </div>
      <div className="card3">
      <h3>Donate & Help</h3>
       <p>Volunteer for a request and coordinate with the requester to help save a life.</p>
         </div>
     
          </div>
  </section>
  )
}

export default HowItWorks