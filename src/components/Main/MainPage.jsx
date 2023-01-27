import React from "react";
import "../../styles/mainpage.css";
import DiscountBlock from "./DiscountBlock";
import SwiperBlock from "./SwiperBlock";
import AllProducts from "../AllProducts/AllProducts"


const MainPage = ({text}) => {
  console.log(text, 'main page');
  return (
    <div className="main__container">
      <SwiperBlock />
      <DiscountBlock />
      <AllProducts text={text} />
    </div>
  );
};

export default MainPage;
