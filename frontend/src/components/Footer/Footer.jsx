import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='tomatologofooter' src={assets.logo} alt="" />
            <p>The project is focused towards the growth of local food stalls which sells pocket friendly and tasty food.
By looking at the name itself we can relate where the project is belonging.
It’s for providing the consumer with the best food in his/her locality.</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
              
            <img src={assets.instagram_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Cities</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-212-456-7890</li>
              <li>hungrybird2401@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 ©-hungrybird2401@gmail.com - All rights reserved.</p>
    </div>
  )
}

export default Footer