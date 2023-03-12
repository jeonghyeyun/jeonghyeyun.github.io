import React from 'react'
import CloseButton from '../CloseButton'
import './Project1Styles.css'
import Cover from '../../assets/images/nudm-mock.jpeg'
import Prototype_3 from '../../assets/images/Prototype-3.png'
import Prototype_2 from '../../assets/images/Prototype-2.png'
import Trello from '../../assets/images/Trello.png'
import NUDM from '../../assets/images/nudm-2023.JPG'

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
            <div className='nudm-pages'>
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
                            <p><span className="subtitle" id="accomp" style={{ display: 'inline-block', paddingBottom: '10px' }}>Accomplishments</span><br/><br/>
                                With my development team, I coded the screen for displaying individual events,
                                which included fields such as event name, description, location, and people 
                                attending (data retrieved from the Firebase database) and also 
                                created a feature to RSVP for each event. After beta testing, we also
                                took responsibility for making the error messages more informative during
                                login and account creation.
                            </p>
                        </div>
                        <div className='content-2'>
                            <img id="prototype" src={Prototype_3} alt='' />
                            <img src={Prototype_2} alt='' />
                        </div>
                    </div>
                    <img src={Trello} alt='' />
                </div>
                <div>
                    <div className='description'>
                        <div className='content-1'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Challenges</span><br/><br/>
                            At first, the agile method made it difficult for everyone to stay on top of
                            tasks because we were constantly throwing our codes to the next team. This made
                            it difficult to add functions on top of the existing code because we had to understand
                            what the code was doing from the very first line. However, after many trial and errors,
                            we adopted better practices to accommodate each team by writing descriptions every time
                            we push to Git, requiring specific items for pull requests, and 
                            utilizing project management tools such as Trello.
                            <br/><br/>
                            My team also struggled with fixing the bug during the beta testing period.
                            The login/account creation error was more complex than we had expected, so we had to
                            search the code file thoroughly for specific functions to fix. At times, fixing one issue
                            would lead to another issue, so it was a tedious debugging process.
                            </p>
                        </div>
                        <div className='content-2'>
                            <img id='nudm' src={NUDM} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project1