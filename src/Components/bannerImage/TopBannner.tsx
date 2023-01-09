import React from 'react';
import './TopBanner.scss';


const TopBannner = ({logo}:any):JSX.Element => {
  return (
       <img src={logo} alt='gift' className='widthAdjust'/>
  )
}

export default TopBannner;