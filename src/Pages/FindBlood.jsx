import React from "react";
import { useState } from "react";

function FindBlood() {

const[bloodgroup,setBloodgroup]=useState('All')
const[selectCity,setSelectcity]=useState('')
const[unitsRequired,setUnitsRequired]=useState(1)

  // donors data array raw
const donors = [
  {
    id: 1,
    name: "Rahul Sharma",
    bloodGroup: "B+",
    city: "Jaipur",
    distance: 3.2,
    availability: "Available",
    unitsRequired: 2,
  },
  {
    id: 2,
    name: "Priya Verma",
    bloodGroup: "O+",
    city: "Jaipur",
    distance: 1.8,
    availability: "Available",
    unitsRequired: 1,
  },
  {
    id: 3,
    name: "Aman Singh",
    bloodGroup: "A+",
    city: "Jaipur",
    distance: 5.4,
    availability: "Unavailable",
    unitsRequired: 3,
  },
  {
    id: 4,
    name: "Neha Gupta",
    bloodGroup: "B+",
    city: "Jaipur",
    distance: 2.1,
    availability: "Available",
    unitsRequired: 2,
  },
  {
    id: 5,
    name: "Arjun Mehta",
    bloodGroup: "AB+",
    city: "Jaipur",
    distance: 4.6,
    availability: "Available",
    unitsRequired: 1,
  },
  {
    id: 6,
    name: "Sneha Joshi",
    bloodGroup: "O-",
    city: "Jaipur",
    distance: 6.3,
    availability: "Unavailable",
    unitsRequired: 2,
  },
  {
    id: 7,
    name: "Vikram Yadav",
    bloodGroup: "A-",
    city: "Jaipur",
    distance: 2.7,
    availability: "Available",
    unitsRequired: 1,
  },
  {
    id: 8,
    name: "Pooja Agarwal",
    bloodGroup: "B-",
    city: "Jaipur",
    distance: 7.1,
    availability: "Available",
    unitsRequired: 3,
  },
];

// filterd data array of donors
const filterDonors = donors.filter((request) => (
  (bloodgroup=== 'All' || request.bloodGroup === bloodgroup) &&
(selectCity.trim() === '' ||
  request.city.toLowerCase().includes(selectCity.trim().toLowerCase())) &&
  (request.unitsRequired >=Number(unitsRequired))
));

  return (
    <section className="find-blood">

      {/* Page heading */}
      <div className="find-blood-header">
        <h1>Find Blood</h1>
        <p>
         Find suitable donors when you need blood
        </p>
      </div>

      {/* Filters */}
      <div className="blood-filters">
                              <div className="filter-group">
                                 <label htmlFor="blood-group">Blood Group</label>
                               <select id="blood-group" value={bloodgroup}
                               onChange={(e)=>setBloodgroup(e.target.value)}>
                                 <option value={'All'}>All Blood</option>
                                 <option value={'A+'}>A+</option>
                                 <option value={'A-'}>A-</option>
                                 <option value={'B+'}>B+</option>
                                 <option value={'B-'}>B-</option>
                                 <option value={'AB+'}>AB+</option>
                                 <option value={'AB-'}>AB-</option>                     
                                 <option value={'O+'}>O+</option>
                                 <option value={'O-'}>O-</option>
                                </select>
                               </div>


                                <div className="filter-group">
                                    
                                   <label htmlFor="city">city</label>
                                    <input id="city" type="text" placeholder="enter city"
                                    value={selectCity}
                                    onChange={(e)=>setSelectcity(e.target.value)}
                                    />
                                </div>

                                <div className="filter-group">
                                   <label htmlFor="units">units required</label>
                                       <input  id="units" type="number"  placeholder="units"
                                       value={unitsRequired} 
                                       onChange={(e)=>setUnitsRequired(Number(e.target.value))}/>
                                </div>

                                <div className="donor-btn">
                                   <button type="button">Find Donors</button>

                                </div>

          </div>

                       <div className="result-section">
                                <div className="result-header">
                                 <h2>Matching Donors</h2>

                                </div>
    
                                   {filterDonors.length > 0 ? (
                                     filterDonors.map((donor) => (
                                       <div className="mock-donor-card" key={donor.id}>
                                         <p>Name: {donor.name}</p>
                                         <p>Blood Group: {donor.bloodGroup}</p>
                                         <p>City: {donor.city}</p>
                                         <p>Distance: {donor.distance} km</p>
                                         <p>Availability: {donor.availability}</p>
                                         <p>Units Available: {donor.unitsRequired}</p>
                                   
                                         <div className="view-donor-btn">
                                           <button>View Donor</button>
                                         </div>
                                       </div>
                                     ))
                                   ) : (
                                     <p>No matching donors found.</p>
                                   )}
           </div>





    </section>
  );
}

export default FindBlood;