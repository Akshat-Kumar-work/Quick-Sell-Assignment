import React from 'react'
import './Card.css';

const Card = ({id , title , tag}) => {
  return (
    <div className='cardContainer'>
        {/* id */}
        <div>
            {id}
        </div>

        {/* title */}
        <div>
        {title}
        </div>

        {/* tag */}
        <div>
            {tag}
        </div>

    </div>
  )
}

export default Card