import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import slider_1 from "../../assets/slider_1.jpg";
import slider_2 from "../../assets/slider_4.jpg";
import slider_3 from "../../assets/slider_3.jpg";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperBlock = () => {
  return (
    <div className="swiper__container">
      <Swiper
        className="swiper-wrapper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="slide">
          <Link to="/category/63cbaae09cfb3fc70c243fce">
            <img className="image-slider" src={slider_1} alt="slice" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <Link to="/category/63caaf6db2f72ed28aa640f6">
            <img className="image-slider" src={slider_2} alt="slice" />
          </Link>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <Link to="/category/63ce643c9288831a7330dc4a">
            <img className="image-slider" src={slider_3} alt="slice" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBlock;
