import React from 'react'
import './HeroStyles.css'
import Profile from '../assets/images/portrait-me.jpg';

const Hero = () => {
    return (
        <div className='landing'>
            <div className='name'>
                <h1>Hello</h1>
                <h1>my name<br/>is Hyeyun</h1>
            </div>
            <div className='about'>
                <div className='about-col-1'>
                    <p>I'm currently pursuing a Bachelor's in Computer Science 
                        and a certificate in Design at Northwestern University. My interests lie in 
                        real-world applications for software development, especially in areas where
                        technology can have a direct impact on underserved communities.
                        My passion is to bring out the humanism in technology and fall in love
                        with the problem I wish to solve through programming.</p>
                </div>
                <div className='about-col-2'>
                    <img id='profile' src={Profile} alt='' />
                </div>
            </div>
            <div className='more-about'>
                <p>I LOVE EVERYTHING AND ANYTHING CREATIVE—DESIGN, TYPOGRAPHY AND UI/UX. <br/><br/>
                    BORN AND RAISED IN KOREA, NOW BASED IN THE DC/MD/VA AREA AND GREATER CHICAGO AREA. <br/><br/>
                    CURRENTLY WORKING ON AN ALZHEIMER’S DISEASE MACHINE LEARNING MODEL.</p>
            </div>
        </div>
    )
}

export default Hero