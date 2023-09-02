import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperBlock = () => {
  return (
    <div className="swiper__container">
      <Swiper
        className="swiper-wrapper"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
        preloadImages={false}
        lazy={true}
      >
        <SwiperSlide className="slide">
          <img
            className="image-slider"
            src="https://www.indiewire.com/wp-content/uploads/2018/08/BCS_402_NW_0131_0046-RT1.jpg"
            alt="slice"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            className="image-slider"
            src="https://a-static.besthdwallpaper.com/saul-goodman-from-better-call-saul-wallpaper-3840x2160-102835_54.jpg"
            alt="slice"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            className="image-slider"
            src="https://i.pinimg.com/originals/5d/9f/93/5d9f933b4f90e0fede37d43eddbc9ed1.jpg"
            alt="slice"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBlock;
