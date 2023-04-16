import React, { useEffect } from "react";
import "../../styles/mainpage.css";
// import DiscountBlock from "./DiscountBlock";
import SwiperBlock from "../Main/SwiperBlock";
// import AllProducts from "../AllProducts/AllProducts"
import CategoryBlock from "../Main/CategoryBlock";
import DiscountProductsFilter from "../Main/Filters/DiscountProductsFilter";
import NewProductsFilter from "../Main/Filters/NewProductsFilter";
import ReviewsBlock from "../Main/ReviewsBlock";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../features/ProductSlice";
// import SmartphoneBanner from "../Main/Banners/SmartphoneBanner";

const MainPage = ({ text }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  return (
    <div className="main__container">
      <SwiperBlock />
      <CategoryBlock />
      {/* <SmartphoneBanner /> */}
      <DiscountProductsFilter />
      <NewProductsFilter />
      <ReviewsBlock />
      {/* <DiscountBlock /> */}
      {/* <AllProducts text={text} /> */}
    </div>
  );
};

export default MainPage;
