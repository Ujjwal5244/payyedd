import React from 'react'
import './About2.css'
import aboutImage2 from "../../../assets/aboutimg2.jpg"; // ✅ Import image

const About2 = () => {
  return (
    <div className='main-about2'>
        <div className='about2-container1'>
            <h1>Who we are</h1>
            <p>Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. lisque persius interesset his et, in quot quidam mea essent possim iriure.</p>
        </div>
        <div className='about2-container2'>
            <img src={aboutImage2} alt='' />
        </div>
    </div>
  )
}

export default About2