import React,{useEffect,useState} from 'react';
import { bottomElementRender } from '../../Backend/HeaderBottom';
import './BottomHeader.scss';

const BottomHeader = ():JSX.Element => {
  const [listing,setList]:any= useState([])

  useEffect(()=>{
      let values = bottomElementRender();
      setList(values)
  },[]);


  return (
    <div className='containerHeader'>
        <div className='sub-container'>
           <p>Domestic Coffee Machine</p>
           <p>Commerical Coffee Machine</p>
           <p>Office Coffee Machine</p>
           <p>Espresso  Machine</p>
           <p>Manual </p>
           <p> Coffee Accessories</p>
           <p>Coffee </p>
           <p>User Machine</p>
        </div>
      
        <div className='lastElement'> 
          <button className='hoverButton'>  Sell on Jebelz</button>     
        </div>
    </div>
  )
}

export default BottomHeader;