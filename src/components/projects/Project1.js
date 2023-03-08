import React from 'react'
import CloseButton from '../CloseButton'
import './Project1Styles.css'
import Cover from '../../assets/images/nudm-mock.jpeg'
import Prototype_3 from '../../assets/images/Prototype-3.png'
import Prototype_2 from '../../assets/images/Prototype-2.png'
import Trello from '../../assets/images/Trello.png'

const Project1 = () => {
    const handleCloseClick = () => {
        // handle close button click event
    };
  return (
    <div className='content'>
        <div className='left-fixed'>
            <h1>NUDM</h1>
        </div>
        <div className='right-scroll'>
            <div className='pages'>
                <div>
                    <div className='cover-page'>
                        <p id='group'>NU DANCE MARATHON</p>
                        <p id='tag'>#frontend #webdevelopment #agile</p>
                        <CloseButton className='button' onClick={handleCloseClick} />
                        <h1 id='title'>Redesigning the annual 30-hour dance marathon experience with a mobile app to track events & fundraising progress.</h1>
                        <p id='date-p1'>(June '22 - March '23)</p>
                        {/* <hr style={{ border: "1.2px solid black", marginTop: "-10px" }}/> */}
                        <img id='cover' src={Cover} alt='' />
                        <div className='col-1'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '15px' }}>Project Overview</span></p>
                            <p>
                                The T&A committee created a mobile app for dancers to
                                track their fundraising and marathon perks in real time.
                                Users can explore and RSVP for upcoming events to engage 
                                with the beneficiaries. 
                            </p>
                        </div>
                        <div className='col-2'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '15px' }}>My Role</span></p>
                            <p>Fullstack Developer</p>
                        </div>
                        <div className='col-3'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '15px' }}>Discipline</span></p>
                            <p>Mobile App Development</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='description'>
                        <div className='content-1'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Summary</span><br/><br/>
                            Northwestern University Dance Marathon (NUDM) 
                            is one of the largest entirely student-run philanthropies 
                            in the nation. This year, the primary beneficiary is 
                            Little Heroes League, who provides free and continuous support 
                            to medically-complex babies and their families. The long-standing
                            second beneficiary is the Evanston Community Foundation.
                            <br/><br/>
                            NUDM's Tech and Analytics committee decided to make the 49th year
                            of NUDM special by developing a mobile app to facilitate dancer
                            experience. We divided into teams of developers, designers, and analytics
                            to work in an agile environment. Each week, our teams worked on design and
                            coding sprints to create a prototype using Figma and ultimately to create
                            the app using React.
                            </p>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '5px' }}>Tools Used</span><br/>
                                <span className="underline">Technical</span> – React JS, Git, Firebase<br/>
                                <span className="underline">Communication</span> – Slack, ClickUp, Trello<br/>
                                <span className="underline">Testing</span> – TestFlight
                            </p>
                        </div>
                        <div className='content-2'>
                            <img src={Prototype_3} alt='' />
                            <img src={Prototype_2} alt='' />
                        </div>
                    </div>
                    <img src={Trello} alt='' />
                </div>
                <div>
                    <div className='description'>
                        <div className='content-1'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Summary</span><br/><br/>
                            Northwestern University Dance Marathon (NUDM) 
                            is one of the largest entirely student-run philanthropies 
                            in the nation. This year, the primary beneficiary is 
                            Little Heroes League, who provides free and continuous support 
                            to medically-complex babies and their families. The long-standing
                            second beneficiary is the Evanston Community Foundation.
                            <br/><br/>
                            </p>
                        </div>
                        <div className='content-2'>
                            <p>hellohello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project1