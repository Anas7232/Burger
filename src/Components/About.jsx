import React from 'react'
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1> UPCOMING EVENT </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores cupiditate ipsam dolor obcaecati sed dolore vitae aliquid, mollitia consequuntur repudiandae ab labore minus earum adipisci.</p>
                <button> Read More </button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
        </div>
    )
}

export default About
