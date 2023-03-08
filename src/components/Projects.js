import React from 'react'
import Gallery from './Gallery'
import './ProjectsStyles.css'
import Star from '../assets/images/star.png'

const Projects = () => {
  return (
    <div className='project-box'>
      <div className='discipline'>
        <h1>Front end<img src={Star} alt='' /></h1>
        <h1>Back end<img src={Star} alt='' /></h1>
        <h1><i>Machine learning</i></h1>
      </div>
      <div className='selected'>
        <p>( SELECTED WORKS 2022-2023 )</p>
      </div>
      <Gallery />
    </div>
  )
}

export default Projects
