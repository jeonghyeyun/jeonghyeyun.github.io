import React from 'react'
import CloseButton from '../CloseButton'
import './Project3Styles.css'
import Cover from '../../assets/images/gwc.png'
import GWCProject1 from '../../assets/images/gwc-projects-1.png'
import VideoPlayer from './VideoPlayer'
import GWCTeam from '../../assets/images/gwc-team.jpg'
import GWCBday from '../../assets/images/gwc-bday.mp4'

const Project3 = () => {
    const handleCloseClick = () => {
        // handle close button click event
    };
  return (
    <div className='content'>
        <div className='left-fixed'>
            <h1>NUDM</h1>
        </div>
        <div className='right-scroll'>
            <div className='gwc-pages'>
                <div>
                    <div className='cover-page'>
                        <p id='group'>GIRLS WHO CODE</p>
                        <p id='tag'>#frontend #webdevelopment #womeninSTEM</p>
                        <CloseButton className='button' onClick={handleCloseClick} />
                        <h1 id='title'>Empowering women in computer science through web development: from high school participant to teaching assistant in 2 years.</h1>
                        <p id='date-p3'>(June '22 - Aug. '23)</p>
                        {/* <hr style={{ border: "1.2px solid black", marginTop: "-10px" }}/> */}
                        <img id='cover' src={Cover} alt='' />
                    </div>
                </div>
                <div>
                <div className='quest-description'>
                            <div className='content-1'>
                                <p>
                                The Girls Who Code (GWC) Summer Immersion Program (SIP) is a 2-week immersion program 
                                for high school students who identify as girls or non-binary. No prior coding
                                experience is required to join, and through this program, students learn to code 
                                real-world projects and build a professional network with corporate partners of 
                                GWC by connecting with female engineers and entrepreneurs.
                                <br/><br/>
                                In high school, I was a participant in GWC SIP. I learned HTML, CSS, and JS through
                                and built a personal website, Buzzfeed-inspired personality quiz, and
                                an activist website on Glitch using the coding skills I learned.
                                <br/><br/>
                                </p>
                            </div>
                            <div className='content-2'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '5px' }}>Tools Used</span><br/>
                                    <span className="underline">Language(s)</span> – HTML, CSS, JS<br/>
                                    <span className="underline">Platform</span> – Glitch<br/>
                                </p>
                            </div>
                        </div>
                        <div className='quest-result'>
                            <img src={GWCProject1} width="600px" alt=''/>
                        </div>

                        <div className='gwc-overview'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '15px' }}>Work Overview</span></p>
                            <p>
                            In freshman year of college, I returned to GWC as a teaching assistant.
                            I worked with a diverse network of teachers committed to closing the 
                            gender gap in technology and advancing women in computer science. We 
                            coordinated with representatives of KPMG and Raytheon Technologies to 
                            organize workshops and mentorship opportunities for students.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='gwc-content'>
                            <div className='gwc-img1'>
                                <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Meet my teaching team</span></p>
                                <img src={GWCTeam} alt='' />
                            </div>
                            <div className='gwc-img2'>
                                <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Celebrating my 20th birthday with my GWC class!</span></p>
                                <VideoPlayer id="gwc-vid"src={GWCBday}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Project3
