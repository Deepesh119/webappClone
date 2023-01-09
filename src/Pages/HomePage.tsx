import React, { useEffect, useState } from "react";
import TopBannner from "../Components/bannerImage/TopBannner";
import CommonContainer from "../Components/CommonContainer/CommonContainer";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "./HomePage.scss";
import banner from "../assets/bannerImage.gif";
import { oneRender } from "../Backend/commonContainer";
import BottomHeader from "../Components/BottomHeader/BottomHeader";
import Mainbanner from "../Components/Mainbannerswipper/Mainbanner";

const HomePage = (): JSX.Element => {
  const [one, setOne] = useState([]);

  useEffect(() => {
    let onest = oneRender();
    setOne(onest);
  }, []);


  return (
    <div className="container">
      <Header />
      <BottomHeader />
      <div className="subContainer">
        <div className="innerContent">
          <Mainbanner />
          <CommonContainer datavalue={one} heading={"Top Sellers"} />
          <TopBannner logo={banner}/>
          <CommonContainer datavalue={one} heading={"Brewers"} />
          <TopBannner logo={banner}/>
          <CommonContainer datavalue={one} heading={"Coffee Corner"} />
          <CommonContainer datavalue={one} heading={"Capsule/Pod Coffee Machines"} />
          <CommonContainer datavalue={one} heading={"New Arrivals"} />
          <CommonContainer datavalue={one} heading={"Barista's Pick"} />
          <CommonContainer datavalue={one} heading={"Accessories"} />
          <CommonContainer datavalue={one} heading={"Cleaning Products"} />
          <CommonContainer datavalue={one} heading={"Staff Favorites"} />
          <CommonContainer datavalue={one} heading={"Office Pick"} />    
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
