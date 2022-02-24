import React from 'react'
import './Servicess.css'
import seo from './seo.svg'
import cloud from "./cloud.svg"
import support from './support.svg'
import technology from './technology.svg'

export default function Servicess() {
    return (

        <div className='conteneur'>
           
           
           
            <div className='divtitreetp'>
                {/* <hr/> */}
                {/* <div className='hr'></div> */}
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum</p>
            </div>

            <div className='cards'>

                <div className='cardmarket'>
                    <img src={seo}/>
                    <h2>Market Research</h2>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit,<br/> sed do eiusmod tempor.</p>
                </div>

                <div className='cardtechno'>
                    <img src={technology} />
                    <h2>Latest Techno</h2>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, <br/>sed do eiusmod tempor.</p>
                </div>

                <div className='carddata'>
                    <img src={cloud}/>
                    <h2>Data Processing</h2>
                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit,<br/> sed do eiusmod tempor.</p>
                </div>

                <div className='cardcustomer'>
                    <img src={support} />
                    <h2>Customer Support</h2>
                    <p>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit, <br/>sed do eiusmod tempor.</p>
                </div>

            </div>

        </div>

    )
}