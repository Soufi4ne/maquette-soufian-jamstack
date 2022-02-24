import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
       <main>
           <div className='divall'>
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum</p>
                <form name='contact'>
                    <input type="email" name='email' placeholder='Enter ur email bro'></input>
                    <button>SUBMIT</button>
                </form>
           </div>
       </main>
    )
}