import React from "react";
import "../../styles/mainpage.css";
// import DiscountBlock from "./DiscountBlock";
import SwiperBlock from "../Main/SwiperBlock";
// import AllProducts from "../AllProducts/AllProducts"
import CategoryBlock from "../Main/CategoryBlock";
import DiscountProductsFilter from "../Main/Filters/DiscountProductsFilter";
import NewProductsFilter from "../Main/Filters/NewProductsFilter";
import SmartphoneBanner from "../Main/Banners/SmartphoneBanner";

const MainPage = ({ text }) => {
  console.log(text, "main page");
  return (
    <div className="main__container">
      <SwiperBlock />
      <CategoryBlock />
      {/* <SmartphoneBanner /> */}
      <DiscountProductsFilter />
      <NewProductsFilter />
      {/* <DiscountBlock /> */}
      {/* <AllProducts text={text} /> */}
    </div>
  );
};

export default MainPage;
