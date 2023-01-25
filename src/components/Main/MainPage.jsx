import React from "react";
import "../../styles/mainpage.css";
import DiscountBlock from "./DiscountBlock";
import SwiperBlock from "./SwiperBlock";


const MainPage = () => {
  return (
    <div className="main__container">
      <SwiperBlock />
      <DiscountBlock />
    </div>
  );
};

export default MainPage;
