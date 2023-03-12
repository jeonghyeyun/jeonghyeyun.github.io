import React from 'react'
import './PhotoStyles.css'
import LightLeak from '../../assets/images/light-bg.jpeg'
import Film from '../../assets/images/filmstrip.png'
import Photo1 from '../../assets/images/photo-1.jpg'
import Photo2 from '../../assets/images/photo-2.jpg'
import Photo3 from '../../assets/images/photo-3.JPG'
import Photo4 from '../../assets/images/photo-4.jpg'
import Photo5 from '../../assets/images/photo-5.jpg'
import Photo8 from '../../assets/images/photo-8.jpg'
import Photo9 from '../../assets/images/photo-9.jpg'
import Photo10 from '../../assets/images/photo-10.jpg'
import Photo11 from '../../assets/images/photo-11.jpg'
import Photo12 from '../../assets/images/photo-12.jpg'

const Photo = () => {
  return (
    <div className='photo-page'>
      <img id='photo-bg' src={LightLeak} alt='' />
      <div className='film-strip'>
        <img id='film' src={Film} alt='' />
        <div className='photo-row-1'>
            <img src={Photo1} alt='' />
            <img src={Photo2} alt='' />
            <img src={Photo3} alt='' />
            <img src={Photo4} alt='' />
            <img src={Photo5} alt='' />
        </div>
        <img id='film2' src={Film} alt='' />
        <div className='photo-row-2'>
            <img src={Photo12} alt='' />
            <img src={Photo8} alt='' />
            <img src={Photo9} alt='' />
            <img src={Photo10} alt='' />
            <img src={Photo11} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Photo
