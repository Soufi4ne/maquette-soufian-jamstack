import React from 'react'
import './Footer.css'
import logo from './logo.png'
export default function Footer() {
    return (
       <footer>
            <a href="#default" class="logofooter"><img src={logo} alt='icon site Hexan, designed by Soufiane the famous artist'></img></a>
            <hr className='lignemetro'/>
            <p className='droits'>© all Rights Reserved by Hexan & $oufiane (The CEO)</p>
       </footer>
    )
}