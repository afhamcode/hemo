import React from 'react'

function Footer() {
  return (
  <footer className='footer'>
   <div className='footer-main'>
        <div className='footer-brand'>
            <h3>Hemo</h3>
    <p>Connecting people who need blood with willing donors.</p>
      </div>
    <div className='footer-links'>
     <h3>Quick Links</h3>
    <a href="">Home</a>
    <a href="">Find Blood</a>
    <a href="">Donate</a>
    </div>
   </div>
    <p className='footer-disclaimer'>
  Hemo is a coordination platform and does not make medical eligibility
  or compatibility decisions.
</p>
  </footer>
  )
}

export default Footer