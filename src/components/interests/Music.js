import React from 'react'
import './MusicStyles.css'
import Phil from '../../assets/images/phil.JPG'
import Table from './Table'

const Music = () => {
  return (
    <div className='music-box'>
      <div className='music-header'>
        <div className='head-col-1'>
            <img src={Phil} alt='' />
        </div>
        <div className='head-col-2'>
            <p>Playlist</p>
            <h1>musik is life</h1>
            <p>Hyeyun Jeong <strong>&middot;</strong> 8 songs</p>
        </div>
      </div>
      <Table />
    </div>
  )
}

export default Music
