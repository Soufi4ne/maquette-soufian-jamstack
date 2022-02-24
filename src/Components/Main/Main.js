import React from 'react'
import './Main.css'
import banner from './banner.png'

export default function Main() {
    return (
        <div className='container'>
          <div className='divtext'>
              <h1>Make <span>business</span> with us<br/> & become beautiful</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem <br/>Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an <br/> unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <button>GET STARTED </button>
          </div>
          <div className='divimg'> <img src={banner}alt='designed by Soufiane the famous artist'></img></div>

        </div>
        
        
    )
}