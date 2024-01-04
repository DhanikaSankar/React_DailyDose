import React from 'react';
import Image from "./Images/dp.jpg";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Info() {
  return (
    <div >
      <img src={Image} className='dp-img' />
      <h2>Laura Smith</h2>
      <h5>Frontend Develpoer</h5>
      <h6>Laurasmith.website</h6>
      <button className='btn-email'>
        <EmailIcon className='btn-icon' />
       <span className='email'>Email</span> 
      </button>
      <button className='btn-linkedin'>
        <LinkedInIcon className='btn-icon'/>
        <span className='link'>LinkedIn</span>
      </button>
    </div>
  )
}

export default Info