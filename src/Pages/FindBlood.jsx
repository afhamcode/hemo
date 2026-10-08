import React from "react";

function FindBlood() {
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
                               <select id="blood-group">
                                 <option>All Blood Groups</option>
                                 <option>A+</option>
                                 <option>A-</option>
                                 <option>B+</option>
                                 <option>B-</option>
                                 <option>AB+</option>
                                 <option>AB-</option>                     
                                 <option>O+</option>
                                 <option>O-</option>
                                </select>
                               </div>


                                <div className="filter-group">
                                    
                                   <label htmlFor="city">city</label>
                                    <input id="city" type="text" placeholder="enter city"/>
                                </div>

                                <div className="filter-group">
                                   <label htmlFor="units">units required</label>
                                       <input  id="units" type="number"  placeholder="units" />
                                </div>

                                <div className="donor-btn">
                                   <button type="button">Find Donors</button>

                                </div>

          </div>

                       <div className="result-section">
                                <div className="result-header">
                                 <h2>Matching Donors</h2>

                                </div>
    
                        <div className="mock-donor-card">
                              <p>Rahul Sharma</p>
                              <p>B+</p>
                              <p>Jaipur</p>
                              <p>Distance: 3.2 km</p>
                              <p>Availability: Available</p>
                       
                        <div className="view-donor-btn">
                           <button>View Donor</button>
                         </div>
                          </div>
           </div>





    </section>
  );
}

export default FindBlood;