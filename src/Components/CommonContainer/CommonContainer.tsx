import React,{useState,useEffect} from "react";
import "./CommonContainer.scss";
import Paper from "@mui/material/Paper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { oneRender } from "../../Backend/commonContainer";




type dataOfCom = {
  image: string;
  data: string;
};


const CommonContainer = ({ datavalue, heading }: any): JSX.Element => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
  };

  return (
    <>
      <Paper elevation={7} className="container">
        <div className="topContent">
          <h3 className="headingFont">{heading}</h3>
          <h3 className="content-color">View All</h3>
        </div>
        <Slider {...settings} className='slider-Scroll'>
          {
           datavalue?.map((val:any)=>{
             return(
               <div >
                 <img src={val.image} alt='text'  className="cardImage"/>
                  <p className="textAlign">{val.data}</p> 
               </div>
             )
           })
          }

        </Slider>
      </Paper>
    </>
  );
};

export default CommonContainer;
