import React from 'react'

function DonateBlood() {
  return (
       <section className='donate-blood' >
                                        {/* Page heading */}
                   <div className="donate-blood-header">
                                 <h1>Donate Blood</h1>
                                 <p>
                                   Find people who need blood and volunteer to help.
                                 </p>
                   </div>
                         
                               {/* Filters */}
               <div className="blood-filters">
                         
                                 <div className="filter-group">
                                   <label htmlFor='blood group'>Blood Group</label>
                                   <select id='blood group'>
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
                                   <label htmlFor='city'>City</label>
                                   <input id='city' type="text" placeholder="Enter city" />
                                 </div>
                         
                                 <div className="filter-group">
                                   <label htmlFor='urgency'>Urgency</label>
                                   <select id='urgency'>
                                     <option>All Urgency</option>
                                     <option>Urgent</option>
                                     <option>High</option>
                                     <option>Critical</option>
                                     <option>Normal</option>
                                   </select>
                                 </div>
                         
                                 <div className="filter-group">
                                   <label className='sort by'>Sort By</label>
                                   <select id='sort by'>
                                     <option>Newest First</option>
                                     <option>Required Soonest</option>
                                     <option>Urgency</option>
                                 </select>
                               </div>
                       
              </div>
                       
                             {/* One mock blood request */}
             <div className="blood-request-card">
                       
                               <div className="request-blood">
                                 <span className="urgency">URGENT</span>
                                 <h2>B+</h2>
                                 <p>2 units</p>
                               </div>
                       
                               <div className="request-details">
                                 <p><strong>Relationship:</strong> Patient's relative</p>
                                 <p><strong>City:</strong> Jaipur</p>
                                 <p><strong>Hospital:</strong> SMS Hospital</p>
                               </div>
                       
                               <div className="request-deadline">
                                 <p><strong>Required by</strong></p>
                                 <p>Today, 8:00 PM</p>
                               </div>
                       
                               <div className="request-remarks">
                                 <p><strong>Remarks</strong></p>
                                 <p>Patient is undergoing treatment and needs blood urgently.</p>
                               </div>
                       
                               <button>Volunteer to Help</button>
                          
                 </div>
       </section>
  )
}

export default DonateBlood