import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './InterestStyles.css'
import Photo from '../assets/images/photo-page.jpg'
import Music from '../assets/images/music-page.jpg'
import Food from '../assets/images/food-page.jpeg'
import Art from '../assets/images/art-page.jpeg'
import { FiHeart } from "react-icons/fi"

const Interests = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='album'>
      <div className='item'>
        <Link to='/photo'><img src={Photo} alt='' /></Link>
        <p>snaps</p>
        <button
          className={isLiked ? 'liked' : ''}
          onClick={handleClick}>
          <FiHeart stroke="white" />
        </button>
      </div>
      <div className='item'>
      <Link to='/art'><img src={Art} alt='' /></Link>
        <p>yuncasso</p>
        <button
          className={isLiked ? 'liked' : ''}
          onClick={handleClick}>
          <FiHeart stroke="white" />
        </button>
      </div>
      <div className='item'>
        <Link to='/music'><img src={Music} alt='' /></Link>
        <p>musik is life</p>
        <button
          className={isLiked ? 'liked' : ''}
          onClick={handleClick}>
          <FiHeart stroke="white" />
        </button>
      </div>
      <div className='item'>
        <Link to='/food'><img src={Food} alt='' /></Link>
        <p>nomnom</p>
        <button
          className={isLiked ? 'liked' : ''}
          onClick={handleClick}>
          <FiHeart stroke="white" />
        </button>
      </div>
    </div>
  )
}

export default Interests

