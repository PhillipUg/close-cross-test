import React from 'react'

function TileHeader({ title, icon}) {
  return (
    <div className='tile-header'>
      {icon}
      <p>{title}</p>
      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.882257 8L0 6.65456L3.29099 4L0 1.34545L0.882257 4.76837e-07L5.84127 4L0.882257 8Z" fill="#9AC802" />
      </svg>
    </div>
  )
}

export default TileHeader
