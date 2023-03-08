import React from 'react'
import CloseButton from '../CloseButton'
import './Project2Styles.css'
import Quest from '../../assets/images/quest-pixel.jpg'
import VideoPlayer from './VideoPlayer'
import LogVid from '../../assets/images/log.mp4'
import Timeseries from '../../assets/images/timeseries.mp4'
import Dial from '../../assets/images/dial.mp4'

const Project2 = () => {
    const handleCloseClick = () => {
        // handle close button click event
    };
  return (
    <div className='content'>
        <div className='left-fixed'>
            <h1>NUIT</h1>
        </div>
        <div className='right-scroll'>
            <div className='pages'>
                <div>
                    <div className='cover-page'>
                            <p id='group'>NU INFORMATION TECHNOLOGY</p>
                            <p id='tag'>#backend #sysadmin #hpc</p>
                            <CloseButton className='button' onClick={handleCloseClick} />
                            <h1 id='title'>Supporting the administration of Northwestern's High-Performance Computing cluster Quest for data-driven research.</h1>
                            <p id='date-p2'>(June '22 - Present)</p>
                            <hr style={{ border: "1.2px solid black", marginTop: "-10px", marginBottom: "4px"}}/>
                            <div className='quest-col-1'>
                                <p>
                                    The research computing infrasturcture (RCI) team at Northwestern's 
                                    central IT department supports the research community through 
                                    sysadmin work for the <span data-tooltip="An HPC cluster consists of 
                                    ultra-fast supercomputers often used in large-scale research. 
                                    To compare its performance with an ordinary desktop or laptop would be like comparing 
                                    walking and flying."
                                    id='hpc'>high-performance computing (HPC)</span> cluster Quest.
                                </p>
                            </div>
                            <div className='quest-col-2'>
                                <p>
                                    Since June 2022, I worked directly with the team lead of RCI 
                                    on tasks that range from issuing node purchase tickets on 
                                    TeamDynamix's TDNext platform to writing setuid programs 
                                    in Unix to configure users on a shared network drive so 
                                    they can transfer data between Quest and Globus endpoint.
                                    <br/><br/>
                                </p>
                                <img src={Quest} alt='' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='quest-description'>
                            <div className='quest-content-1'>
                                <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Project Overview</span><br/><br/>
                                Quest comprises four login nodes that users connect to directly and 
                                1009 compute nodes with a total of 49,680 cores used for scheduled jobs. 
                                A traditional file server cannot handle this immense load of compute nodes, 
                                so Quest has a specialized file server–the IBM GPFS parallel filesystem 
                                with ESS storage totaling approximately 8 petabytes (PB). Think of it as a Google Drive
                                for supercomputers, or file sharing on steroids per my supervisor.
                                <br/><br/>
                                At Northwestern, we encourage and allow researchers to push the limits in computation
                                to further research in various fields. However, because we have no guardrails, 
                                research computing services teams need to constantly monitor the performance of GPFS. 
                                Prior to this project, we observed the number of waiters on the GPFS server through an
                                outdated dashboard created with HTML3 and iframes. The goal of this project was to
                                create a visualization tool to represent the log-based data to facilitate the readability
                                of low-level system issues and performance of GPFS.
                                </p>
                                <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '5px' }}>Tools Used</span><br/>
                                    <span className="underline">Language(s)</span> – Python<br/>
                                    <span className="underline">Libraries</span> – Matplotlib, Numpy, Pandas<br/>
                                    <span className="underline">Platform</span> – Jupyter Notebook<br/>
                                    <i>*Deployed to qlogger02 cgi-bin</i>
                                </p>
                            </div>
                            <div className='quest-content-2'>
                                <VideoPlayer src={LogVid} width="240px" />
                            </div>
                        </div>
                        <div className='quest-result'>
                            <VideoPlayer src={Timeseries} width="600px"/>
                        </div>
                    </div>
                    <div>
                        <div className='quest-description-2'>
                            <div className='content-1'>
                                <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Challenges</span><br/><br/>
                                There were several outliers in the raw data, so setting the dial arrow 
                                to point to the calculated mean, 1st, 2nd, and 4th quartiles would 
                                lead to ridiculous numbers. To make this more accurate, we decided to 
                                alter the data calculation so that once the number of waiters exceeds 400, 
                                the arrow would just point to 400 (because at this point, we know the 
                                performance is already awfully failing. )
                                <br/><br/>
                                I also struggled to find a nice color scheme for the dial because 
                                I wanted the colors to be intuitive (e.g. green meaning good, red meaning bad). 
                                I tried reversing the existing colormaps or digging through the World Wide Web 
                                for one that would suit this project, but I ended creating my own colormap. 
                                It was quite the journey, but I was satisfied with the result.
                                <br/><br/>
                                </p>
                            </div>
                            <div className='content-2'>
                            <p><span className="subtitle" style={{ display: 'inline-block', paddingBottom: '10px' }}>Future Projects</span><br/><br/>
                            Currently working on automatating the process of allocating
                            compute nodes to researchers.</p>
                            </div>
                        </div>
                        <div className='quest-result-2'>
                            <VideoPlayer src={Dial} width="600px"/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Project2
