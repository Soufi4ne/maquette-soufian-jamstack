import React from 'react'
import './Solution.css'
import marketing from './marketing-img.svg'

export default function Solution() {
    return (

       <section className='section'>

           <div className='divtexte'>
               <h1>Best Digital Marketing Solution</h1>
               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br/>
                sed diam nonummy nibh euismod Lorem ipsum Lorem<br/>
                 ipsum dolor sit amet, hendrerit mel, es vidit eu lorem <br/>
                 animal iracundia. Ius te altera essent incorrupte.</p>
                 <ul className='listasse'>
                     <li>
Hendrerit omittantur mel, es vidit eu lorem animal.</li>
                     <li>
Hendrerit omittantur mel, es vidit eu lorem animal.</li>
                     <li>
Hendrerit omittantur mel, es vidit eu lorem animal.</li>
                 </ul>
           </div>

           <div className='divimage'>
                <img src={marketing} alt='designed by Soufiane the famous artist'/>
           </div>

       </section>

    )
}