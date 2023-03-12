import React from 'react'
import './FoodStyles.css'
import Kkwabaegi from '../../assets/images/kkwabaegi.png'
import Brioche from '../../assets/images/brioche.png'
import Banana from '../../assets/images/banana.png'
import Sesame from '../../assets/images/sesame.png'
import Pretzel from '../../assets/images/pretzel.png'

const Food = () => {
  return (
    <div className='bake'>
      <span className='dish'>
        <h1 className='hover-text'>Kkwabaegi–Korean Twisted Donut</h1>
        <img className='manImg' src={Kkwabaegi} alt='' />
      </span>
      <span className='dish'>
        <h1 className='hover-text'>Brioche</h1>
        <img className='manImg' src={Brioche} alt='' />
      </span>
      <span className='dish'>
        <h1 className='hover-text'>Banana Bread</h1>
        <img className='manImg' src={Banana} alt='' />
      </span>
      <span className='dish'>
        <h1 className='hover-text'>Sesame Tapioca Bread</h1>
        <img className='manImg' src={Sesame} alt='' />
      </span>
      <span className='dish'>
        <h1 className='hover-text'>Pretzel</h1>
        <img className='manImg' src={Pretzel} alt='' />
      </span>
      <h1>Madeleine</h1>
      <h1>Pizzelle</h1>
      <h1>Cheesecake</h1>
      <h1 id='more'><i>More to come...</i></h1>
    </div>
  )
}

export default Food
