import React,{useState,useEffect} from 'react';
import { Carousel } from 'antd';
import { renderLogoBanner } from '../../Backend/mainBanner';
import './Mainbanner.scss';


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  

const Mainbanner = ():JSX.Element => {

    const [banner,setBanner] = useState([])

    useEffect(()=>{
      let ban = renderLogoBanner();
      setBanner(ban);
    },[])

  return (
    <Carousel className='container' autoplay >
        {
          banner?.map((val,index)=>{
              return(
                  <img src={val.picture} key={index} alt='image'/>
              )
          })
        }  
    </Carousel>
  )
}

export default Mainbanner;