import React from 'react'
import { useState } from 'react'

function DonateBlood() {
const[blood,setBlood]=useState('All')
const[selectedurgency,setSelectedurgency]=useState('All Urgency')
const[selectCity,setSelectCity]=useState('')
// array of raw data
const bloodRequests = [
{
id: 1,
bloodgroup: "A+",
urgency: "High",
city: "Noida",
hospital: "Kailash Hospital",
units: 2,
relationship: "Patient's relative",
requiredBy: "Today, 8:00 PM",
remarks: "Patient requires blood before scheduled surgery."
},
{
id: 2,
bloodgroup: "O+",
urgency: "Critical",
city: "Delhi",
hospital: "AIIMS Delhi",
units: 3,
relationship: "Father",
requiredBy: "Today, 6:00 PM",
remarks: "Urgent request for a patient undergoing treatment."
},
{
id: 3,
bloodgroup: "B+",
urgency: "Normal",
city: "Badarpur",
hospital: "Tughlakabad Hospital",
units: 1,
relationship: "Brother",
requiredBy: "Tomorrow, 10:00 AM",
remarks: "Blood requested for an upcoming medical procedure."
},
{
id: 4,
bloodgroup: "A-",
urgency: "High",
city: "Noida",
hospital: "Yatharth Hospital",
units: 2,
relationship: "Daughter",
requiredBy: "Today, 9:00 PM",
remarks: "Family is seeking eligible volunteer donors."
},
{
id: 5,
bloodgroup: "O-",
urgency: "Critical",
city: "Delhi",
hospital: "Safdarjung Hospital",
units: 2,
relationship: "Mother",
requiredBy: "Today, 7:00 PM",
remarks: "Mock urgent request for testing the card layout."
},
{
id: 6,
bloodgroup: "AB+",
urgency: "Low",
city: "Ghaziabad",
hospital: "Yashoda Hospital",
units: 1,
relationship: "Husband",
requiredBy: "Tomorrow, 2:00 PM",
remarks: "Request created in advance of a planned procedure."
},
{
id: 7,
bloodgroup: "B-",
urgency: "Normal",
city: "Delhi",
hospital: "GTB Hospital",
units: 2,
relationship: "Sister",
requiredBy: "Tomorrow, 11:00 AM",
remarks: "Mock request awaiting a suitable donor."
},
{
id: 8,
bloodgroup: "AB-",
urgency: "High",
city: "Noida",
hospital: "Fortis Hospital",
units: 3,
relationship: "Son",
requiredBy: "Today, 10:00 PM",
remarks: "Request submitted for testing multiple filter combinations."
},
{
id: 9,
bloodgroup: "O+",
urgency: "Normal",
city: "Ghaziabad",
hospital: "District Hospital",
units: 1,
relationship: "Wife",
requiredBy: "Tomorrow, 9:00 AM",
remarks: "Mock request for testing normal-urgency results."
},
{
id: 10,
bloodgroup: "A+",
urgency: "Low",
city: "Badarpur",
hospital: "City Hospital",
units: 2,
relationship: "Friend",
requiredBy: "Tomorrow, 4:00 PM",
remarks: "Sample request for checking city and blood-group filters."
}
];


//  filter request array
const filterRequest = bloodRequests.filter(
  (request) =>
    (blood === 'All' || request.bloodgroup === blood) &&
    (request.urgency === selectedurgency ||
      selectedurgency === 'All Urgency') &&
    (selectCity === '' ||
      request.city.toLowerCase().includes(selectCity.toLowerCase()))
);
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
                                   <select id='blood group'
                                    value={blood}
                                    onChange={(e)=>{setBlood(e.target.value)}}
                                   >
                                     <option value={'All'}>All Blood Groups</option>
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
                                   <label htmlFor='city'>City</label>
                                   <input id='city' type="text" placeholder="Enter city" 
                                   value={selectCity} onChange={(e)=>{
                                    setSelectCity(e.target.value)
                                   }}/>
                                 </div>
                         
                                 <div className="filter-group">
                                   <label htmlFor='urgency'>Urgency</label>
                                   <select id='urgency' value={selectedurgency}
                                   onChange={(e)=>{setSelectedurgency(e.target.value)
                                   
                                   }}>
                                     <option value='All Urgency'>All Urgency</option>
                                     <option value='Urgent'>Urgent</option>
                                     <option value='High'>High</option>
                                     <option value='Critical'>Critical</option>
                                     <option value='Normal'>Normal</option>
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
                <div>
                  {filterRequest.map((request)=>(
                     <div className="blood-request-card" key={request.id}>
                       
                               <div className="request-blood">
                                 <span className="urgency">{request.urgency}</span>
                                 <h2>{request.bloodgroup}</h2>
                                 <p>{request.units} units of blood</p>
                               </div>
                       
                               <div className="request-details">
                                 <p><strong>Relationship:</strong>{request.relationship}</p>
                                 <p><strong>City:</strong>{request.city}</p>
                                 <p><strong>Hospital:H</strong>{request.hospital}</p>
                               </div>
                       
                               <div className="request-deadline">
                                 <p><strong>Required By:</strong></p>
                                 <p>{request.requiredBy}</p>
                               </div>
                       
                               <div className="request-remarks">
                                 <p><strong>Remarks</strong></p>
                                 <p>{request.remarks}</p>
                               </div>
                       
                               <button>Volunteer to Help</button>
                          
                     </div>
                      ))}
                  </div>
            
       </section>
  )
}

export default DonateBlood