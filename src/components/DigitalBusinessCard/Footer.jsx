import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
      <TwitterIcon className='icon'/>
      <FacebookIcon className='icon'/>
      <InstagramIcon className='icon'/>
      <GitHubIcon className='icon'/>
    </div>
  )
}

export default Footer