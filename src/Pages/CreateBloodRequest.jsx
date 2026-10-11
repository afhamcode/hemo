import React from 'react'
import { useState } from 'react';


function CreateBloodRequest() {
  const[blood,setBlood]=useState('')
  const[submitted,setSubmitted]=useState(false)

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const requestData = Object.fromEntries(formData.entries());

  console.log("Blood Request Details:", requestData);

  // Show the success message
  setSubmitted(true);

  // Reset the form fields
  e.target.reset();

  // Reset the controlled blood-group select
  setBlood("");
};

  return (
     <div className='CreateBloodRequest'>

          <div className='CreateBloodRequest-header'>
              <h1>Create Blood Request</h1>
          </div>
                         
                             <form onSubmit={handleSubmit}
                             onChange={(e)=>{setSubmitted(false)}}
                             >
                              <div className="create-request-form">
                            
                                <label htmlFor="name">Patient Name:</label>
                                <input
                                  type="text"
                                  id="name"
                                  placeholder="Enter patient name"
                                  required
                                  name='name'
                                />
                            
                                <label htmlFor="relation">Relationship:</label>
                                <input
                                  type="text"
                                  id="relation"
                                  placeholder="Enter your relationship with the patient"
                                  required
                                  name='relation'
                                />
                            
                                <label htmlFor="blood-group">Blood Group:</label>
                                <select
                                  id="blood-group"
                                  value={blood}
                                  onChange={(e) => setBlood(e.target.value)}
                                  required
                                  name='blood-group'
                                >
                                  <option value="">Select blood group</option>
                                  <option value="A+">A+</option>
                                  <option value="A-">A-</option>
                                  <option value="B+">B+</option>
                                  <option value="B-">B-</option>
                                  <option value="AB+">AB+</option>
                                  <option value="AB-">AB-</option>
                                  <option value="O+">O+</option>
                                  <option value="O-">O-</option>
                                </select>
                            
                                <label htmlFor="units">Units Required:</label>
                                <input
                                  type="number"
                                  id="units"
                                  placeholder="Enter units required"
                                  min="1"
                                  required
                                  name='units'
                                />
                            
                                <label htmlFor="hospital">Hospital Name:</label>
                                <input
                                  type="text"
                                  id="hospital"
                                  placeholder="Enter hospital name"
                                  required
                                  name='hospital'
                                />
                            
                                <label htmlFor="hospitalAddress">Hospital Address:</label>
                                <input
                                  type="text"
                                  id="hospitalAddress"
                                  placeholder="Enter hospital address"
                                  required
                                  name='hospitalAddress'
                                />
                            
                                <label htmlFor="city">City:</label>
                                <input
                                  type="text"
                                  id="city"
                                  placeholder="Enter patient city"
                                  required
                                  name='city'
                                />
                            
                                <label htmlFor="urgency">Urgency:</label>
                                <select id="urgency" required defaultValue=""
                                name='urgency'>
                                  <option value="" disabled>Select urgency</option>
                                  <option value="CRITICAL">Critical</option>
                                  <option value="HIGH">High</option>
                                  <option value="NORMAL">Normal</option>
                                </select>
                            
                                <label htmlFor="requiredBy">Required By:</label>
                                <input
                                  type="datetime-local"
                                  id="requiredBy"
                                  required
                                  name='requiredBy'
                                />
                            
                                <label htmlFor="remarks">Remarks (Optional):</label>
                                <textarea
                                  id="remarks"
                                  placeholder="Enter additional remarks"
                                  rows="3"
                                  name='remarks'
                                />
                            
                                <button type="submit">Submit Blood Request</button>
                            
                              </div>
                          
                                
                              </form>
                              {submitted && (
                             <p className="success-message" role="status">
                                 Blood request submitted successfully!
                                  </p>
                                          )}
             </div>
  );
}

export default CreateBloodRequest;